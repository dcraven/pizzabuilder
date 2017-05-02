package com.dcraven.pizzabuilder.service;

import com.dcraven.pizzabuilder.model.Menu;
import com.dcraven.pizzabuilder.model.Pizza;
import com.dcraven.pizzabuilder.repository.PizzaRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

@Service
public class PizzaService {

    @Autowired
    private PizzaRepository pizzaRepository;

    public Menu getAllPizzas() {
        Menu menu = new Menu();

        menu.setCustomPizzas(this.getCustomPizzas());
        menu.setSignaturePizzas(this.getDefaultPizzas());

        return menu;
    }

    public List<Pizza> getCustomPizzas() {
        return (List<Pizza>) pizzaRepository.findAll();
    }

    public Pizza create(Pizza pizza) {
        this.pizzaRepository.save(pizza);
        return pizza;
    }

    public Pizza get(Long id) {
        return this.pizzaRepository.findOne(id);
    }

    public Pizza set(Long id, Pizza pizza) {
        this.pizzaRepository.delete(id);
        pizza.setId(id);
        this.pizzaRepository.save(pizza);

        return pizza;
    }

    public Pizza delete(Long id) {
        Pizza pizza = this.pizzaRepository.findOne(id);
        this.pizzaRepository.delete(id);
        return pizza;
    }

    public Pizza getSignaturePizzaByName(String name) {
        List<Pizza> pizzaList = this.getDefaultPizzas();
        Pizza pizza = null;
        Iterator<Pizza> pizzaIterator = pizzaList.iterator();
        while(pizzaIterator.hasNext()) {
            pizza = pizzaIterator.next();
            if(pizza.getName().equals(name)) {
                break;
            }
        }
        return pizza;
    }

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