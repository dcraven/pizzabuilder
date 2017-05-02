package com.dcraven.pizzabuilder.model;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PizzaTest {

    @Test
    public void pizzaCreateName() {
        Pizza pizza = new Pizza("Pepperoni Deluxe", Arrays.asList("pepperoni", "sausage", "onion"));
        assertThat(pizza.getName(), is("Pepperoni Deluxe"));
    }

    @Test
    public void pizzaSetGetName() {
        Pizza pizza = new Pizza("Pepperoni Deluxe", Arrays.asList("pepperoni", "sausage", "onion"));
        pizza.setName("Stinky Deluxe");

        assertThat(pizza.getName(), is("Stinky Deluxe"));
    }

    @Test
    public void pizzaSetGetId() {
        Pizza pizza = new Pizza("Pepperoni Deluxe", Arrays.asList("pepperoni", "sausage", "onion"));
        pizza.setId(1234L);

        assertThat(pizza.getId(), is(1234L));
    }

    @Test
    public void pizzaCreateToppings() {
        Pizza pizza = new Pizza("Pepperoni Deluxe", Arrays.asList("pepperoni", "sausage", "onion"));
        assertThat(pizza.getToppings().get(0), is("pepperoni"));
    }

    @Test
    public void pizzaSetToppingsFromList() {
        List<String> toppings = new ArrayList<>();
        toppings.add("anchovies");
        toppings.add("green peppers");

        Pizza pizza = new Pizza("Pepperoni Deluxe", Arrays.asList("pepperoni", "sausage", "onion"));
        pizza.setToppingsList(toppings);

        assertThat(pizza.getToppings().get(0), is("anchovies"));
    }
}
