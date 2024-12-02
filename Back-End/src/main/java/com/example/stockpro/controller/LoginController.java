package com.example.stockpro.controller;

import com.example.stockpro.model.Login;
import com.example.stockpro.model.LoginDTO;
import com.example.stockpro.repository.LoginRepository;
import com.example.stockpro.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    LoginService loginService;
    @Autowired
    LoginRepository loginRepository;

    @PostMapping("/")
    public ResponseEntity<Object> login(@RequestBody LoginDTO request) {
        if (loginService.isUserValid(request.email(), request.password())) {
            Login loginInfo = loginRepository.findByEmail(request.email());
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new LoginDTO(loginInfo));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found!");
        }
    }
}