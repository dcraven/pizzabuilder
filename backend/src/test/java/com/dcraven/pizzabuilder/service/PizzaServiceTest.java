package com.dcraven.pizzabuilder.service;
import com.dcraven.pizzabuilder.model.Pizza;
import com.dcraven.pizzabuilder.repository.PizzaRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.instanceOf;
import static org.hamcrest.Matchers.is;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PizzaServiceTest {
    @Autowired
    private PizzaRepository pizzaRepository;

    @Test
    public void testGetDefaultPizzaList() {
        PizzaService pizzaService = new PizzaService();
        List<Pizza> pizzaList = pizzaService.getDefaultPizzas();

        assertThat(pizzaList.isEmpty(), is(false));
        assertThat(pizzaList.get(0), instanceOf(Pizza.class));
    }
}