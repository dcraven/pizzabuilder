import {Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: "pizza-component",
  templateUrl: "pizza.component.html",
  styleUrls: ["pizza.component.css"]
})

export class PizzaComponent {
  name: string;
  toppings: string;
  price: number;
}
