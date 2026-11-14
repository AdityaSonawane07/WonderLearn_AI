package com.wonderlearn.wonder.learn.service;
import com.wonderlearn.wonder.learn.Entity.User;
import com.wonderlearn.wonder.learn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

	    @Autowired
	    private UserRepository userRepository;

	    public User registerUser(User user) {
	        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
	            throw new RuntimeException("Email is already registered!");
	        }
	        // Note: In production, remember to encode the password using BCrypt
	        return userRepository.save(user);
	    }

	    public Optional<User> authenticate(String email, String password) {
	        Optional<User> userOpt = userRepository.findByEmail(email);
	        if (userOpt.isPresent() && userOpt.get().getPassword().equals(password)) {
	            return userOpt;
	        }
	        return Optional.empty();
	    }

}
