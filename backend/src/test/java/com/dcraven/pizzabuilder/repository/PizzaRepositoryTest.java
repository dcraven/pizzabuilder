package com.dcraven.pizzabuilder.repository;

import com.dcraven.pizzabuilder.model.Pizza;
import com.dcraven.pizzabuilder.repository.PizzaRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.nullValue;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PizzaRepositoryTest {
    @Autowired
    private PizzaRepository pizzaRepository;

    @Test
    public void testAddPizza() {
        List<String> toppings = new ArrayList<>();
        toppings.add("pepperoni");

        Pizza pizza = new Pizza("Pepperoni Pizza", toppings);
        pizzaRepository.save(pizza);
    }

    @Test
    public void testPizzaAddRetrieve() {
        Pizza pizza1 = new Pizza("Pepperoni Deluxe", Arrays.asList("pepperoni", "sausage", "onion"));
        pizzaRepository.save(pizza1);

        Long id = pizza1.getId();
        Pizza pizza2 = pizzaRepository.findOne(id);

        assertThat(pizza2.getName(), is("Pepperoni Deluxe"));
    }

    @Test
    public void testFindPizzaByName() {
        pizzaRepository.deleteAll();

        Pizza pizza = new Pizza("Pepperoni Deluxe", Arrays.asList("pepperoni", "sausage", "onion"));
        System.out.println(pizza.toString());
        pizzaRepository.save(pizza);

        Pizza pizza1 = pizzaRepository.findPizzaByName("Pepperoni Deluxe");

        // Delete the pizza we just added.
        pizzaRepository.delete(pizza.getId());
        assertThat(pizza1.getName(), is("Pepperoni Deluxe"));
    }

    @Test
    public void testDeletePizza() {
        Pizza pizza = new Pizza("Pepperoni Foo", Arrays.asList("pepperoni"));
        pizzaRepository.save(pizza);

        assertThat(pizzaRepository.findOne(pizza.getId()), is(notNullValue()));

        pizzaRepository.delete(pizza.getId());

        assertThat(pizzaRepository.findOne(pizza.getId()), is(nullValue()));
    }
}
