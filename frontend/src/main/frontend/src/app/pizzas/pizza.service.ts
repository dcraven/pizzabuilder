import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IMenu, IPizza} from './pizza';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class PizzaService {
  constructor(private http: Http) {}

  servicePizza: IPizza;

  private _pizzaUrl = 'api/pizzas';

  putPizza(pizza: IPizza): Observable<IPizza> {
    return this.http.post(this._pizzaUrl, pizza)
      .map((response: Response) => <IPizza> response.json())
      .do(data=>console.log("Pizza create: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  updatePizza(pizza: IPizza): Observable<IPizza> {
    return this.http.put(this._pizzaUrl, pizza.id, pizza)
      .map((response: Response) => <IPizza> response.json())
      .do(data=>console.log("Pizza update: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getPizza(id: number): Observable<IPizza> {
    console.log("GETTING PIZZA***********");
    return this.http.get(this._pizzaUrl + '/' + id)
      .map((response: Response) => <IPizza> response.json())
      .do(data => console.log("Custom: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  deletePizza(pizza: IPizza) {
    return this.http.delete(this._pizzaUrl + "/" + pizza.id)
      .map((response: Response) => <IPizza>response.json().data);
  }

  getSignaturePizza(name: string): Observable<IPizza> {
    return this.http.get(this._pizzaUrl + '/signature/' + name)
      .map((response: Response) => <IPizza> response.json())
      .do(data=>console.log("Signature: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getCustomPizza(id: number): Observable<IPizza> {
    return this.http.get(this._pizzaUrl + '/' + id)
      .map((response: Response) => <IPizza> response.json())
      .do(data => console.log("Custom: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getMenu(): Observable<IMenu> {
    return this.http.get(this._pizzaUrl)
      .map((response: Response) => <IMenu> response.json())
      .do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
