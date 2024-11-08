package CS.Backend.cs.backend.service;

import CS.Backend.cs.backend.RequestResponse.PostRequest;
import CS.Backend.cs.backend.RequestResponse.PostResponse;
import CS.Backend.cs.backend.entity.Post;
import org.springframework.stereotype.Component;

@Component
public class PostMapper {

    public Post toPost(PostRequest postRequest , String imageId) {
        return Post.builder()
                .title(postRequest.getTitle())
                .Description(postRequest.getDescription())
                .link(postRequest.getLink())
                .eventDate(postRequest.getEventDate())
                .imageId(imageId)
                .build();
    }

    public PostResponse toPostResponse(Post post, String imageData) {
        return PostResponse.builder()
                .title(post.getTitle())
                .Description(post.getDescription())
                .link(post.getLink())
                .category(post.getCategory())
                .imageId(post.getImageId())
                .imageData(imageData)  // Add Base64 image data to the response
                .build();
    }

    public PostResponse toOnePostResponse(Post post){
        return PostResponse.builder()
                .title(post.getTitle())
                .Description(post.getDescription())
                .link(post.getLink())
                .category(post.getCategory())
                .imageId(post.getImageId())
                .build();
    }
}
