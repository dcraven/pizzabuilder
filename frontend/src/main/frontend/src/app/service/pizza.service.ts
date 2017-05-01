import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";


@Injectable
export class PizzaService {
  constructor(private http:Http) {}

  getPizzas() {
    return this.http.get('api/pizzas')
      .map((response:Response) => <Pizza[]>response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }
}
