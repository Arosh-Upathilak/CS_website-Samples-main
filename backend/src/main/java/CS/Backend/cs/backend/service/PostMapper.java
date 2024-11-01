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
                .imageId(imageId)
                .build();
    }

    public PostResponse toPostResponse(Post post){
        return PostResponse.builder()
                .title(post.getTitle())
                .Description(post.getDescription())
                .imageId(post.getImageId())
                .build();
    }
}
