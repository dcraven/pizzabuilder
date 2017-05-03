import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PizzaListComponent} from './pizzas/pizza-list.component';
import {RouterModule} from '@angular/router';
import {PizzaService} from './pizzas/pizza.service';
import {PizzaEditComponent} from './pizzas/pizza-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'pizzas', component: PizzaListComponent},
      {path: 'pizzas/signature/:name', component: PizzaEditComponent},
      {path: 'pizzas/:id', component: PizzaEditComponent},
      {path: '', redirectTo: 'pizzas', pathMatch: 'full'},
      {path: '**', redirectTo: 'pizzas', pathMatch: 'full'}
    ])
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
