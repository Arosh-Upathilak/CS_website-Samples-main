package CS.Backend.cs.backend.service;

import CS.Backend.cs.backend.RequestResponse.PostRequest;
import CS.Backend.cs.backend.RequestResponse.PostResponse;
import CS.Backend.cs.backend.entity.Post;
import CS.Backend.cs.backend.repository.PostRepository;
import com.mongodb.client.gridfs.model.GridFSFile;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.IOUtils;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDate;
import java.util.Base64;
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

        LocalDate today = LocalDate.now();
        String category;
        if (postRequest.getEventDate().isAfter(today)) {
            category = "upcoming";
        } else {
            category = "previous";
        }

        Post post = postMapper.toPost(postRequest, imageId);
        post.setImageId(imageId);
        post.setCategory(category);
        Post savedPost = postRepository.save(post);

        return postMapper.toOnePostResponse(savedPost);
    }

    // Retrieves all posts From mongodbDB database
    public List<PostResponse> getAllPosts() {
        List<Post> posts = postRepository.findAll();
        return posts.stream().map(post -> {
            String imageData = null;
            if (post.getImageId() != null) {
                try {
                    Query query = new Query(Criteria.where("_id").is(post.getImageId()));
                    GridFSFile gridFSFile = gridFsTemplate.findOne(query);

                    if (gridFSFile != null) {
                        GridFsResource resource = gridFsTemplate.getResource(gridFSFile);
                        InputStream inputStream = resource.getInputStream();
                        byte[] imageBytes = IOUtils.toByteArray(inputStream);  // Convert image to byte array
                        imageData = Base64.getEncoder().encodeToString(imageBytes);  // Convert byte array to Base64 string
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            return postMapper.toPostResponse(post, imageData);
        }).collect(Collectors.toList());
    }

    private String saveImage(MultipartFile imageFile) {
        try {
            return gridFsTemplate.store(
                    imageFile.getInputStream(),
                    imageFile.getOriginalFilename(),
                    imageFile.getContentType()
            ).toString();
        } catch (IOException e) {
            throw new RuntimeException("Error storing image in MongoDB GridFS: " + e.getMessage(), e);
        }
    }

    public PostResponse updatePost(String postId, PostRequest postRequest, MultipartFile imageFile) {
        Post existingPost = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("Post with ID " + postId + " not found."));

        existingPost.setTitle(postRequest.getTitle());
        existingPost.setDescription(postRequest.getDescription());
        existingPost.setLink(postRequest.getLink());
        existingPost.setEventDate(postRequest.getEventDate());

        if (imageFile != null && !imageFile.isEmpty()) {
            // Save the new image and update the image ID
            String newImageId = saveImage(imageFile);
            existingPost.setImageId(newImageId);
        }

        // Save the updated post
        Post savedPost = postRepository.save(existingPost);
        return postMapper.toOnePostResponse(savedPost);
    }

    public void deletePost(String postId) {
        if(postRepository.existsById(postId)){
            postRepository.deleteById(postId);
        }else {
            throw new IllegalArgumentException("Post with ID " + postId + " not found.");
        }
    }



    //External Functions
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
