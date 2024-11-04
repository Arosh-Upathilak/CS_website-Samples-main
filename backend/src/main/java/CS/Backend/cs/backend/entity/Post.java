package CS.Backend.cs.backend.entity;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Document(collection  = "post")
public class Post {
    String id;
    String title;

    String Description;

    LocalDateTime date;  // if date == today (category == previous)

    String category; // upcoming  , previous

    String imageId;
}
