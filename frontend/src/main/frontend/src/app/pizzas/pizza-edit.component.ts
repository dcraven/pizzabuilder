import {Component, Input, OnInit, AfterContentChecked} from '@angular/core';
import {IMenu, IPizza} from './pizza';
import {PizzaService} from './pizza.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

import 'rxjs/add/operator/switchMap';


@Component({
  moduleId: module.id,
  templateUrl: 'pizza-edit.component.html',
  styleUrls: ['pizza-edit.component.css']
})

export class PizzaEditComponent implements OnInit, AfterContentChecked {
  @Input() pizza: IPizza;
  toppingString: string = "";
  menu: IMenu;
  nameConflict: boolean = true;

  availableToppings = ['pepperoni', 'onions', 'peppers', 'sausage', 'tomato', 'cheese'];

  constructor(private pizzaService: PizzaService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: { pizza: IPizza }) => this.pizza = data.pizza);

    this.route.params
      .switchMap((params: Params) => this.pizzaService.getMenu())
      .subscribe(menu => this.menu = menu);
  }

  ngAfterContentChecked(): void {
    if (this.pizza) {
      this.toppingString = this.pizza.toppings.join(", ");
    }
  }

  pizzaEditOnCancel() {
    this.router.navigateByUrl('/pizzas');
  }

  pizzaEditOnSubmit(pizza: IPizza) {
    this.pizza = pizza;
    this.pizza.signature = false;

    this.route.params
      .switchMap((pizza: IPizza) => this.pizzaService.putPizza(this.pizza))
      .subscribe(
        success => this.refreshPizzaList(pizza),
        pizza => this.pizza = pizza);

    this.router.navigateByUrl('/pizzas');
  }

  refreshPizzaList(pizza: IPizza) {
    for (let menuPizza of this.menu.customPizzas) {
      if (pizza.id == menuPizza.id) {
        menuPizza = pizza;
      }
    }
    console.log("NEW PIZZA LIST: " + this.menu.customPizzas);
  }

  checkNameConflicts(event): void {
    let name = event.target.value;
    for (let pizza of this.menu.signaturePizzas) {
      if (pizza.name === name) {
        this.nameConflict = true;
        break;
      }
      this.nameConflict = false;
    }
  }

  modifyToppingString(event) {
    if (event.target.checked) {
      this.pizza.toppings.push(event.target.value);
    } else {
      let index = this.pizza.toppings.indexOf(event.target.value);
      this.pizza.toppings.splice(index, 1);
    }
    this.pizza.price = 9.99 + this.pizza.toppings.length;
  }
}

