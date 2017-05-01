package com.dcraven.pizzabuilder.service;

import com.dcraven.pizzabuilder.model.Pizza;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Service
public class PizzaService {



    public List<Pizza> getDefaultPizzas() {
        List<Pizza> pizzaList;
        try {
            Resource pizzaConfigResource = new ClassPathResource("pizza.config.json");
            File pizzaConfigFile = pizzaConfigResource.getFile();

            TypeReference<List<Pizza>> mapType = new TypeReference<List<Pizza>>() {};
            ObjectMapper objectMapper = new ObjectMapper();
            pizzaList = objectMapper.readValue(pizzaConfigFile, mapType);
        } catch (Exception e) {
            pizzaList = new ArrayList<>();
            e.printStackTrace();
        }
        return pizzaList;
    }
}