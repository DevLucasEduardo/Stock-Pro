package com.example.stockpro.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "Card")
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product", length = 100, nullable = false)
    private String product;

    @Column(name = "supplier", length = 100, nullable = false)
    private String supplier;

    @Column(name = "brand", length = 100, nullable = false)
    private String brand;

}


