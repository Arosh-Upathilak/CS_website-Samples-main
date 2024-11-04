package CS.Backend.cs.backend.service;

import CS.Backend.cs.backend.RequestResponse.PostRequest;
import CS.Backend.cs.backend.RequestResponse.PostResponse;
import CS.Backend.cs.backend.entity.Post;
import CS.Backend.cs.backend.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostMapper postMapper;
    private final PostRepository postRepository;
    private final GridFsTemplate gridFsTemplate; // Constructor injection

    public PostResponse createPost(PostRequest postRequest, MultipartFile imageFile) {
        String imageId;
        try {
            imageId = gridFsTemplate.store(imageFile.getInputStream(), imageFile.getOriginalFilename(), imageFile.getContentType()).toString();
        } catch (IOException e) {
            throw new RuntimeException("Error storing image in MongoDB GridFS: " + e.getMessage(), e); // More descriptive error message
        }
        Post post = postMapper.toPost(postRequest, imageId);
        post.setImageId(imageId);
        Post savedPost = postRepository.save(post);

        return postMapper.toPostResponse(savedPost);
    }

    public List<PostResponse> getAllPosts() {
        List<Post> posts = postRepository.findAll();
        return posts.stream()
                .map(postMapper::toPostResponse)
                .collect(Collectors.toList());
    }
}
