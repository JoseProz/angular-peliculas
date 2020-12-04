import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { FrontPageComponent } from './front-page/front-page.component';

@NgModule({
    declarations: [
      AppComponent,
      MoviesListComponent,
      InputIntegerComponent,
      CartComponent,
      FrontPageComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
export class AppModule { }