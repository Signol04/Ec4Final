package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
public class HomeController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }

    @GetMapping(path = "/api/deportes/{id}/participantes")
    public @ResponseBody List<Map<String, Object>> formacion(@PathVariable Long id) {
        String sql = "SELECT participante.id as ID, deportista.nombre as DEPORTISTA, elementodeporte.nombre as ELEMENTO_DEPORTE FROM participante JOIN deportista ON participante.id_deportista = deportista.id JOIN elementodeporte ON participante.id_elementodeporte = elementodeporte.id WHERE id_deporte = ?";
        List<Map<String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
        return queryResult;
    }
}

