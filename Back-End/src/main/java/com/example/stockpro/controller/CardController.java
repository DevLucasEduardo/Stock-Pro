package com.example.stockpro.controller;

import com.example.stockpro.model.Card;
import com.example.stockpro.model.CardDTO;
import com.example.stockpro.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cards")
public class CardController {
    // Classe que atua como um controlador para manipular operações relacionadas a cartões.

    @Autowired
    CardRepository cardRepository;
    // Injeção de dependência do repositório de cartões para acessar e manipular dados de cartões.

    @GetMapping("/")
    public ResponseEntity<List<CardDTO>> getAllCards() {
        // Método que lida com solicitações GET para obter todos os cartões.
        return ResponseEntity.status(HttpStatus.OK).body(cardRepository.findAll().stream().map(CardDTO::new).toList());
        // Retorna uma lista de cartões mapeados para objetos CardDTO e envia como resposta HTTP 200 (OK).
    }

    @PostMapping("/")
    public ResponseEntity<CardDTO> postCard(@RequestBody Card card) {
        // Método que lida com solicitações POST para criar um novo cartão.
        return ResponseEntity.status(HttpStatus.CREATED).body(new CardDTO(cardRepository.save(card)));
        // Cria um novo cartão, salva no repositório e retorna o cartão criado com a resposta HTTP 201 (Created).
    }


}
