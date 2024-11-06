package CS.Backend.cs.backend.RequestResponse;

import lombok.*;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostRequest {

    String title;

    String Description;

    String link;

    LocalDate eventDate;

//    String image;
}
