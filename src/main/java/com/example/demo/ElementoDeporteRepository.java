package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "elementosdeporte", path = "elementosdeporte")
public interface ElementoDeporteRepository extends CrudRepository<ElementoDeporte, Long> {

}
