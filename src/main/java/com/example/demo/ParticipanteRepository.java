package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "participantes", path = "participantes")
public interface ParticipanteRepository extends CrudRepository<Participante, Long> {

}
