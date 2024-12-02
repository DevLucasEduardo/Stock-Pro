package com.example.stockpro.service;

import com.example.stockpro.model.Login;
import com.example.stockpro.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    @Autowired
    LoginRepository loginRepository;

    public boolean isUserValid(String email, String password) {

        Login login = loginRepository.findByEmail(email);

        return login != null && login.getPassword().equals(password);
    }
}
