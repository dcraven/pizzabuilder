package com.dcraven.pizzabuilder.repository;

import com.dcraven.pizzabuilder.model.Pizza;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface PizzaRepository extends CrudRepository<Pizza, Long> {
    Pizza findPizzaByName(String name);
}
