import {Component, OnInit} from '@angular/core';
import {IMenu, IPizza} from './pizza';
import {PizzaService} from './pizza.service';


@Component({
  moduleId: module.id,
  templateUrl: 'pizza-list.component.html',
  styleUrls: ['pizza-list.component.css']
})

export class PizzaListComponent {
  pageTitle: string = 'Pizza List';
  errorMessage: string;

  pizzaMenu: IMenu;

  constructor(private _pizzaService: PizzaService) { }

  editPizza(pizza: IPizza) {

    console.log("Edit pizza: " + pizza.name);
  }

  ngOnInit(): void {
    this._pizzaService.getMenu()
      .subscribe(pizzaMenu => this.pizzaMenu = pizzaMenu,
                 error => this.errorMessage = <any>error);
  }
}
