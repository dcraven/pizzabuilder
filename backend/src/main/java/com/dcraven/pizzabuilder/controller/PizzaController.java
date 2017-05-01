package com.dcraven.pizzabuilder.controller;

import com.dcraven.pizzabuilder.model.Pizza;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/")
public class PizzaController {

    // Get a list of custom pizzas for the Pizza List
    @RequestMapping(value = "pizzas", method = RequestMethod.GET)
    public List<Pizza> list() {
        Pizza foo = new Pizza("Pepperoni", "cheese, pepperoni");
        List<Pizza> myList = new ArrayList<>();

        myList.add(foo);

        return myList;
    }

    // Create a new pizza and add to the database
    @RequestMapping(value = "pizzas", method = RequestMethod.POST)
    public Pizza create(@RequestBody Pizza pizza) {
        return new Pizza("Foo", "bar, baz");
    }

    // Get a single pizza from the repository
    @RequestMapping(value = "pizzas/{id}", method = RequestMethod.GET)
    public Pizza get(@PathVariable Long id) {
        return new Pizza("Foo", "bar, baz");
    }

    // Overwrite a pizza with a new one.
    @RequestMapping(value = "pizzas/{id}", method = RequestMethod.PUT)
    public Pizza update(@PathVariable Long id, @RequestBody Pizza pizza) {
        return new Pizza("Foo", "bar, baz");
    }

    // Remove a pizza from the repository.
    @RequestMapping(value = "pizzas/{id}", method = RequestMethod.DELETE)
    public Pizza delete(@PathVariable Long id) {
        return new Pizza("Foo", "bar, baz");
    }
}
