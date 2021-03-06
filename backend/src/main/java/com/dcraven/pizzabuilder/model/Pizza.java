package com.dcraven.pizzabuilder.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "PIZZAS")
public class Pizza implements Serializable {
    // An autogenerated id (unique for each user in the db)
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private float price;

    @NotNull
    private String name;

    private boolean signature = false;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "toppings", joinColumns = @JoinColumn(name = "pizza_id"))
    @Column(name = "toppings")
    private List<String> toppings = new ArrayList<>();

    public Pizza() {
    }

    public Pizza(String name, List<String> toppings) {
        this.name = name;
        this.toppings = toppings;
    }

    public boolean getSignature() {
        return signature;
    }

    public void setSignature(boolean signature) {
        this.signature = signature;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public List<String> getToppings() {
        return toppings;
    }

    public void setToppingsList(List<String> toppings) {
        this.toppings = toppings;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String toString() {
        return "ID: " + this.getId() + " NAME: " + this.getName() + " TOPPINGS: " + this.getToppings().toString() + " PRICE: " + this.getPrice();
    }
}
