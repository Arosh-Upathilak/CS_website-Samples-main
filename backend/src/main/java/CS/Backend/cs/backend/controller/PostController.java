package CS.Backend.cs.backend.controller;

import CS.Backend.cs.backend.RequestResponse.PostRequest;
import CS.Backend.cs.backend.RequestResponse.PostResponse;
import CS.Backend.cs.backend.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/v1/post")
@RequiredArgsConstructor
@CrossOrigin("*")
public class PostController {

    private final PostService postService;
    @PostMapping(value = "/createpost" )
    public ResponseEntity<PostResponse> createPost(
            @RequestParam("title") String title,
            @RequestParam("description") String description,
            @RequestParam(value = "image", required= false) MultipartFile imageFile

    ){
        System.out.println("calling");

        PostRequest postRequest = new PostRequest(title, description);
        return ResponseEntity.ok(postService.createPost(postRequest, imageFile));
    }

    @GetMapping("/allposts")
    public ResponseEntity<List<PostResponse>> getAllPosts() {
        List<PostResponse> posts = postService.getAllPosts();
        return ResponseEntity.ok(posts);
    }


}
