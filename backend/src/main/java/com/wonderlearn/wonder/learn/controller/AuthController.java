package com.wonderlearn.wonder.learn.controller;
import com.wonderlearn.wonder.learn.Entity.User;
import com.wonderlearn.wonder.learn.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	    @Autowired
	    private AuthService authService;

	    @PostMapping("/register")
	    public ResponseEntity<?> registerUser(@RequestBody User user) {
	        try {
	            User registeredUser = authService.registerUser(user);
	            return ResponseEntity.ok(registeredUser);
	        } catch (RuntimeException e) {
	            return ResponseEntity.badRequest().body(e.getMessage());
	        }
	    }

	    @PostMapping("/login")
	    public ResponseEntity<?> loginUser(@RequestBody User loginRequest) {
	        Optional<User> user = authService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
	        if (user.isPresent()) {
	            return ResponseEntity.ok(user.get());
	        }
	        return ResponseEntity.status(401).body("Invalid email or password");
	    }
}
