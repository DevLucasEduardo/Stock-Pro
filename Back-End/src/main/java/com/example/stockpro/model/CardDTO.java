package com.example.stockpro.model;

public record CardDTO(Long id,
                      String product,
                      String supplier,
                      String brand) {

    public CardDTO(Card card) {
        this(
                card.getId(),
                card.getProduct(),
                card.getSupplier(),
                card.getBrand()
        );
    }
}