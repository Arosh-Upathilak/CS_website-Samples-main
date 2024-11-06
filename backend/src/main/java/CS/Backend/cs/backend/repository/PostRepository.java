package CS.Backend.cs.backend.repository;

import CS.Backend.cs.backend.entity.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface PostRepository extends MongoRepository<Post, String> {

    @Query("{ 'eventdate': { $lt: ?0 }, 'category': 'upcoming' }")
    List<Post> findExpiredUpcomingPosts(LocalDate today);

    @Query("{ 'eventdate': { $gte: ?0 }, 'category': 'previous' }")
    List<Post> findFuturePreviousPosts(LocalDate today);
}
