import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IMenu, IPizza} from './pizza';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class PizzaService {
  constructor(private _http:Http) {}

  private _pizzaUrl = 'api/pizzas';

  putPizza(pizza: IPizza): Observable<IPizza> {
    return this._http.put(this._pizzaUrl, pizza)
      .map((response: Response) => <IPizza> response.json())
      .do(data=>console.log("Pizza create: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getSignaturePizza(name: string): Observable<IPizza> {
    return this._http.get(this._pizzaUrl + '/signature/' + name)
      .map((response: Response) => <IPizza> response.json())
      .do(data=>console.log("Signature: " + JSON.stringify(data)))
      .catch(this.handleError);
  }



  getMenu(): Observable<IMenu> {
    return this._http.get(this._pizzaUrl)
      .map((response: Response) => <IMenu> response.json())
      .do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}