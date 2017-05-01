package com.dcraven.pizzabuilder.model;

import org.springframework.util.StringUtils;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Arrays;
import java.util.List;

@Entity
@Table(name = "PIZZAS")
public class Pizza {
    // An autogenerated id (unique for each user in the db)
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @NotNull
    private String name;
    @NotNull
    private String toppings;

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    private float price;

    public Pizza() {
    }

    public Pizza(String name, String toppings) {
        this.name = name;
        this.toppings = toppings;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getToppings() {
        return toppings;
    }

    public void setToppings(String toppings) {
        this.toppings = toppings;
    }

    public void setToppings(List<String> toppings) {
        this.toppings = StringUtils.collectionToDelimitedString(toppings, ", ");
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<String> getToppingsAsList() {
        List<String> toppingsList = Arrays.asList(this.toppings.split("\\s*,\\s*"));
        return toppingsList;
    }

    public String toString() {
        return "NAME: " + this.getName() + " TOPPINGS: " + this.getToppings() + " PRICE: " + this.getPrice();
    }
}
