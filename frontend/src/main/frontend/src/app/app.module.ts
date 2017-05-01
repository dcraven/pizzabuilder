import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PizzaComponent} from "./component/pizza.component";
import {PizzaService} from "./service/pizza.service";
import {PizzaListComponent} from "./component/pizza-list.component";

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaService,
    PizzaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
