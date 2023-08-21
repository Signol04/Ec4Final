package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "deportistas", path = "deportistas")
public interface DeportistaRepository extends CrudRepository<Deportista, Long> {

}
