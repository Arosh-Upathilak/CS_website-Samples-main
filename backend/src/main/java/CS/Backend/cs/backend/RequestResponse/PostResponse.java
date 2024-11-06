package CS.Backend.cs.backend.RequestResponse;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostResponse {
    String title;

    String Description;

    String link;

    String category;

    private String imageId;
}
