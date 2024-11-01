package CS.Backend.cs.backend.entity;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

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

    private String imageId;
}
