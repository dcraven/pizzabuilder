import {Component, OnInit} from '@angular/core';
import {IMenu, IPizza} from './pizza';
import {PizzaService} from './pizza.service';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  moduleId: module.id,
  templateUrl: 'pizza-list.component.html',
  styleUrls: ['pizza-list.component.css']
})

export class PizzaListComponent {
  errorMessage: string;
  router: Router;

  pizzaMenu: IMenu;

  constructor(
    private _pizzaService: PizzaService,
    _router: Router,
    private route: ActivatedRoute
  ) {
    this.router = _router;
  }

  editSignaturePizza(pizza: IPizza) {
    this.router.navigateByUrl('/pizzas/signature/' + pizza.name);
  }

  editCustomPizza(inpizza: IPizza) {
    console.log("ngPizzaList: Getting PIZZA: " + inpizza.id);
    this.route.params
      .switchMap((outpizza: IPizza) => this._pizzaService.getCustomPizza(inpizza))
      .subscribe(pizza => pizza = pizza);
    this.router.navigateByUrl('/pizzas/' + inpizza.id);
  }

  deleteCustomPizza(pizza: IPizza) {
    console.log("Params: " + this.route.params);
    this.route.params
      .switchMap((pizza: IPizza) => this._pizzaService.deletePizza(pizza))
      .subscribe(pizza => pizza = pizza);
  }

  ngOnInit(): void {
    this._pizzaService.getMenu()
      .subscribe(pizzaMenu => this.pizzaMenu = pizzaMenu,
                 error => this.errorMessage = <any>error);
  }
}
