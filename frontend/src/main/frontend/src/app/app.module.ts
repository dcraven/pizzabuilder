import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PizzaComponent} from './pizzas/pizza.component';
import {PizzaListComponent} from './pizzas/pizza-list.component';
import {RouterModule} from '@angular/router';
import {PizzaService} from './pizzas/pizza.service';
import {PizzaEditComponent} from './pizzas/pizza-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaListComponent,
    PizzaEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'pizzas', component: PizzaListComponent},
      {path: 'pizzas/:id', component: PizzaEditComponent},
      {path: 'pizzas/signature/:name', component: PizzaEditComponent},
      {path: '', redirectTo: 'pizzas', pathMatch: 'full'},
      {path: '**', redirectTo: 'pizzas', pathMatch: 'full'}
    ])
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
