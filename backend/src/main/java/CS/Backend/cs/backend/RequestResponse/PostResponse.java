package CS.Backend.cs.backend.RequestResponse;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostResponse {
    private String title;

    private String Description;

    private String link;

    private String category;

    private String imageId;

    private String imageData;

    private LocalDate eventDate;
}
