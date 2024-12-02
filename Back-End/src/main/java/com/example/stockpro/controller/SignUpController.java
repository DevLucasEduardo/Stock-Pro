package com.example.stockpro.controller;

import com.example.stockpro.model.Login;
import com.example.stockpro.model.LoginDTO;
import com.example.stockpro.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sign")
public class SignUpController {

    @Autowired
    LoginRepository loginRepository;
    @PostMapping("/")
    public ResponseEntity<Object> postUser(@RequestBody Login login) {

        Login emailValidation = loginRepository.findByEmail(login.getEmail());

        if (emailValidation != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("E-mail already registered!");
        }

        Login savedLogin = loginRepository.save(login);
        return ResponseEntity.status(HttpStatus.CREATED).body(new LoginDTO(savedLogin));
    }
}