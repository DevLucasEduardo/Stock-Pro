package com.example.stockpro.repository;

import com.example.stockpro.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface LoginRepository extends JpaRepository<Login, Long> {
    Login findByEmail(String email);
}
