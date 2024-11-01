package CS.Backend.cs.backend.repository;

import CS.Backend.cs.backend.entity.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post, String> {

}
