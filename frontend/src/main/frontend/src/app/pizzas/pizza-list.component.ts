import {Component, OnInit} from '@angular/core';
import {IMenu, IPizza} from './pizza';
import {PizzaService} from './pizza.service';
import {Router} from "@angular/router";


@Component({
  moduleId: module.id,
  templateUrl: 'pizza-list.component.html',
  styleUrls: ['pizza-list.component.css']
})

export class PizzaListComponent {
  pageTitle: string = 'Pizza List';
  errorMessage: string;
  router: Router;

  pizzaMenu: IMenu;

  constructor(private _pizzaService: PizzaService, _router: Router) {
    this.router = _router;
  }

  editSignaturePizza(pizza: IPizza) {
    console.log("Edit pizza: " + pizza.name);
    this.router.navigateByUrl('/pizzas/signature/' + pizza.name);
  }

  ngOnInit(): void {
    this._pizzaService.getMenu()
      .subscribe(pizzaMenu => this.pizzaMenu = pizzaMenu,
                 error => this.errorMessage = <any>error);
  }
}
