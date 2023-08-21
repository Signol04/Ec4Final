package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ElementoDeporteRepository extends JpaRepository<ElementoDeporte, Long> {
    // You don't need to define the save method here; it's already provided by JpaRepository.
}

