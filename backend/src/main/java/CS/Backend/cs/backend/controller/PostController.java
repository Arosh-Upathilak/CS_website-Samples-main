package CS.Backend.cs.backend.controller;

import CS.Backend.cs.backend.RequestResponse.PostRequest;
import CS.Backend.cs.backend.RequestResponse.PostResponse;
import CS.Backend.cs.backend.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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
            @RequestParam(value = "link", required= false) String link,
            @RequestParam(value = "eventdate") String eventDateString,
            @RequestParam(value = "image", required= false) MultipartFile imageFile

    ){
        System.out.println("calling");

        //Typecasting (convert stringDate to LocalDate)
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate eventDate = LocalDate.parse(eventDateString, formatter);

        PostRequest postRequest = new PostRequest(title, description , link ,eventDate);
        return ResponseEntity.ok(postService.createPost(postRequest, imageFile));
    }

    @GetMapping("/allposts")
    public ResponseEntity<List<PostResponse>> getAllPosts() {
        List<PostResponse> posts = postService.getAllPosts();
        return ResponseEntity.ok(posts);
    }

    @PutMapping("/update/{postId}")
    public ResponseEntity<PostResponse> updatePost(
            @PathVariable String postId,
            @RequestParam("title") String title,
            @RequestParam("description") String description,
            @RequestParam(value = "link", required = false) String link,
            @RequestParam(value = "eventdate") String eventDateString,
            @RequestParam(value = "image", required = false) MultipartFile imageFile
    ) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate eventDate = LocalDate.parse(eventDateString, formatter);

        PostRequest postRequest = new PostRequest(title, description, link, eventDate);
        PostResponse updatedPost = postService.updatePost(postId, postRequest, imageFile);

        return ResponseEntity.ok(updatedPost);
    }


    @DeleteMapping("/deletepost/{postId}")
    public ResponseEntity<String> deletePost(@PathVariable String postId) {
        postService.deletePost(postId);
        return ResponseEntity.ok("Post deleted successfully");
    }



}
