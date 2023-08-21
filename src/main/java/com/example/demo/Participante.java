package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Participante {

    private @Id @GeneratedValue Long id;

    @ManyToOne()
    @JoinColumn(name = "id_deporte")
    private Deporte deporte;

    @ManyToOne()
    @JoinColumn(name = "id_deportista")
    private Deportista deportista;

    @ManyToOne()
    @JoinColumn(name = "id_elementodeporte")
    private ElementoDeporte elementoDeporte;

    public Participante() {}

    public Participante(Deporte deporte, Deportista deportista, ElementoDeporte elementoDeporte) {
        this.deporte = deporte;
        this.deportista = deportista;
        this.elementoDeporte = elementoDeporte;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Deporte getDeporte() {
        return deporte;
    }

    public void setDeporte(Deporte deporte) {
        this.deporte = deporte;
    }

    public Deportista getDeportista() {
        return deportista;
    }

    public void setDeportista(Deportista deportista) {
        this.deportista = deportista;
    }

    public ElementoDeporte getElementoDeporte() {
        return elementoDeporte;
    }

    public void setElementoDeporte(ElementoDeporte elementoDeporte) {
        this.elementoDeporte = elementoDeporte;
    }
}
