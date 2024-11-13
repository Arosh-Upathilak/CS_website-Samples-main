package CS.Backend.cs.backend.entity;

import CS.Backend.cs.backend.entity.User;
import CS.Backend.cs.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AdminUserInitializer implements ApplicationRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        createAdminIfNotExists("admin1@example.com", "Admin1", "User", "adminPassword1");
        createAdminIfNotExists("admin2@example.com", "Admin2", "User", "adminPassword2");
        createAdminIfNotExists("admin3@example.com", "Admin3", "User", "adminPassword3");
        createAdminIfNotExists("admin4@example.com", "Admin4", "User", "adminPassword4");
        createAdminIfNotExists("admin5@example.com", "Admin5", "User", "adminPassword5");
    }

    private void createAdminIfNotExists(String email, String firstName, String lastName, String password) {
        if (userRepository.findByEmail(email) == null) {
            User admin = User.builder()
                    .firstName(firstName)
                    .lastName(lastName)
                    .email(email)
                    .password(passwordEncoder.encode(password))
                    .build();

            userRepository.save(admin);
        }
    }
}
