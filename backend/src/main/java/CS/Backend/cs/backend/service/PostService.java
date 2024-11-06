package CS.Backend.cs.backend.service;

import CS.Backend.cs.backend.RequestResponse.PostRequest;
import CS.Backend.cs.backend.RequestResponse.PostResponse;
import CS.Backend.cs.backend.entity.Post;
import CS.Backend.cs.backend.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostMapper postMapper;
    private final PostRepository postRepository;
    private final GridFsTemplate gridFsTemplate;

    // Creates a new post and stores the image in MongoDB GridFS
    public PostResponse createPost(PostRequest postRequest, MultipartFile imageFile) {
        String imageId;
        try {
            imageId = gridFsTemplate.store(imageFile.getInputStream(), imageFile.getOriginalFilename(), imageFile.getContentType()).toString();
        } catch (IOException e) {
            throw new RuntimeException("Error storing image in MongoDB GridFS: " + e.getMessage(), e);
        }
        Post post = postMapper.toPost(postRequest, imageId);
        post.setImageId(imageId);
        Post savedPost = postRepository.save(post);

        return postMapper.toPostResponse(savedPost);
    }

    // Retrieves all posts
    public List<PostResponse> getAllPosts() {
        List<Post> posts = postRepository.findAll();
        return posts.stream()
                .map(postMapper::toPostResponse)
                .collect(Collectors.toList());
    }

    // Updates categories based on event date
    public void updatePostCategories() {
        LocalDate today = LocalDate.now();

        // Update posts that should be marked as 'previous'
        List<Post> expiredPosts = postRepository.findExpiredUpcomingPosts(today);
        expiredPosts.forEach(post -> post.setCategory("previous"));
        postRepository.saveAll(expiredPosts);

        // Update posts that should be marked as 'upcoming'
        List<Post> futurePosts = postRepository.findFuturePreviousPosts(today);
        futurePosts.forEach(post -> post.setCategory("upcoming"));
        postRepository.saveAll(futurePosts);
    }

    // Scheduled task to update categories every day at midnight
    @Scheduled(cron = "0 0 0 * * ?") // Runs daily at midnight
    public void scheduledUpdatePostCategories() {
        updatePostCategories();
    }
}
