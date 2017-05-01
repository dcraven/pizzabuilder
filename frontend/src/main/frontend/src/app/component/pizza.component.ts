import {Component} from "@angular/core";


@Component({
  moduleId: module.id,
  selector: "pizza-component",
  template: "<h3>{{pizza.name}}</h3>"
})

export class PizzaComponent {
  name: string;
  toppings: string;
  price: number;
}
