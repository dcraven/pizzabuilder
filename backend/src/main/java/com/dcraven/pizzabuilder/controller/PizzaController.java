package com.dcraven.pizzabuilder.controller;

import com.dcraven.pizzabuilder.model.Menu;
import com.dcraven.pizzabuilder.model.Pizza;
import com.dcraven.pizzabuilder.service.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/")
public class PizzaController {

    @Autowired
    private PizzaService pizzaService;

    // Get a list of all pizzas (custom and signature) for the Pizza List
    @RequestMapping(value = "pizzas", method = RequestMethod.GET)
    public Menu list() {
        return pizzaService.getAllPizzas();
    }

    // Get a list of just signature pizzas
    @RequestMapping(value = "pizzas/signature/{name}", method = RequestMethod.GET)
    public Pizza getSignaturePizzaByName(@PathVariable String name) {
        return pizzaService.getSignaturePizzaByName(name);
    }

    // Create a new pizza and add to the database
    @RequestMapping(value = "pizzas", method = RequestMethod.POST)
    public Pizza create(@RequestBody Pizza pizza) {
        return pizzaService.create(pizza);
    }

    // Get a single pizza from the repository
    @RequestMapping(value = "pizzas/{id}", method = RequestMethod.GET)
    public Pizza get(@PathVariable Long id) {
        return pizzaService.get(id);
    }

    // Overwrite a pizza with a new one.
    @RequestMapping(value = "pizzas/{id}", method = RequestMethod.PUT)
    public Pizza update(@PathVariable Long id, @RequestBody Pizza pizza) {
        return pizzaService.set(id, pizza);
    }

    // Remove a pizza from the repository.
    @RequestMapping(value = "pizzas/{id}", method = RequestMethod.DELETE)
    public Pizza delete(@PathVariable Long id) {
        return pizzaService.delete(id);
    }
}
