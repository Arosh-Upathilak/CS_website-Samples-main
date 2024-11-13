package CS.Backend.cs.backend.entity;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Document(collection  = "post")
public class Post {

    private String id;

    private String title;

    private String Description;

    private LocalDate eventDate;  // if date == today (category == previous)

    private String category; // upcoming  , previous

    private String link;

    private String imageId;
}
