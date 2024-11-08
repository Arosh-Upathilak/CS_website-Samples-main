package CS.Backend.cs.backend.controller;

import CS.Backend.cs.backend.RequestResponse.PostRequest;
import CS.Backend.cs.backend.RequestResponse.PostResponse;
import CS.Backend.cs.backend.service.PostService;
import com.mongodb.client.gridfs.model.GridFSFile;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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


}
