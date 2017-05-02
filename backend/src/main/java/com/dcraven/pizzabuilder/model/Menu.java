package com.dcraven.pizzabuilder.model;

import java.util.List;

public class Menu {
    private List<Pizza> signaturePizzas;

    public List<Pizza> getSignaturePizzas() {
        return signaturePizzas;
    }

    public void setSignaturePizzas(List<Pizza> signaturePizzas) {
        this.signaturePizzas = signaturePizzas;
    }

    public List<Pizza> getCustomPizzas() {
        return customPizzas;
    }

    public void setCustomPizzas(List<Pizza> customPizzas) {
        this.customPizzas = customPizzas;
    }

    private List<Pizza> customPizzas;
}
