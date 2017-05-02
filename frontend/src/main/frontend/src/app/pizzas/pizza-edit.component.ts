import {Component, Input, OnInit} from '@angular/core';
import {IPizza} from './pizza';
import {PizzaService} from './pizza.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import 'rxjs/add/operator/switchMap';


@Component({
  moduleId: module.id,
  templateUrl: 'pizza-edit.component.html',
  styleUrls: ['pizza-edit.component.css']
})

export class PizzaEditComponent implements OnInit {
  @Input() pizza: IPizza;
  pageTitle: string = "Pizza Editor";
  toppingString: string = "";

  availableToppings = ['pepperoni', 'onions', 'peppers', 'sausage', 'tomato', 'cheese'];

  constructor(
    private pizzaService: PizzaService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.pizzaService.getSignaturePizza(params['name']))
      .subscribe(pizza => this.pizza = pizza);
  }

  removeTopping(topping: string): void {
    console.log("Removing: " + topping);
  }

  modifyToppingString(event) {
    if(event.target.checked) {
      if (this.toppingString != "") {
        this.toppingString += ", ";
      }
      this.toppingString += event.target.value
    } else {
      this.toppingString = this.toppingString.replace(", " + event.target.value, "");
      this.toppingString = this.toppingString.replace(event.target.value, "");
    }
    if(this.toppingString.startsWith(",")) {
      this.toppingString = this.toppingString.slice(2);
    }
  }
}

