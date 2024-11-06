package CS.Backend.cs.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class  CsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(CsBackendApplication.class, args);
	}

}
