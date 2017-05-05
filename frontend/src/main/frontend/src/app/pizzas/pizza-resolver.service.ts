import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {IPizza} from './pizza';
import {PizzaService} from './pizza.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class PizzaResolver implements Resolve<IPizza> {
  constructor(
    private pizzaService: PizzaService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let id = route.params['id'];
    return this.pizzaService.getPizza(id)
      .map(pizza => pizza ? pizza : null)
      .catch((error: any) => {
      console.log(`${error}. Heading back to pizza list.`);
      this.router.navigateByUrl('/pizzas');
      return Observable.of(null);
      });
  }
}
