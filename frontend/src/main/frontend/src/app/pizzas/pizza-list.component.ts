import {Component, OnInit} from '@angular/core';
import {IMenu, IPizza} from './pizza';
import {PizzaService} from './pizza.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PizzaEditComponent} from './pizza-edit.component';


@Component({
  moduleId: module.id,
  templateUrl: 'pizza-list.component.html',
  styleUrls: ['pizza-list.component.css']
})

export class PizzaListComponent implements OnInit {
  errorMessage: string;
  router: Router;

  pizzaMenu: IMenu;

  constructor(private _pizzaService: PizzaService,
              _router: Router,
              private route: ActivatedRoute,
              private pizzaEditForm: PizzaEditComponent) {
    this.router = _router;
  }

  editSignaturePizza(pizza: IPizza) {
    this.router.navigateByUrl('/pizzas/signature/' + pizza.name);
  }

  editPizza(inpizza: IPizza) {
    this.router.navigateByUrl('/pizzas/' + inpizza.id);
  }

  deletePizza(pizza: IPizza) {
    console.log("Params: " + this.route.params);

    this._pizzaService.deletePizza(pizza)
      .subscribe(
        success => this.refreshPizzaList()
      );
  }

  refreshPizzaList() {
    this._pizzaService.getMenu()
      .subscribe(pizzaMenu => this.pizzaMenu = pizzaMenu,
        error => this.errorMessage = <any>error);
  }

  ngOnInit(): void {
    this._pizzaService.getMenu()
      .subscribe(
        pizzaMenu => {
          this.pizzaMenu = pizzaMenu;
          this.refreshPizzaList();
          },
        error => this.errorMessage = <any>error
      );
  }
}
