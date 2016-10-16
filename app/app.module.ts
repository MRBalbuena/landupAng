import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel.component';
import { MenuComponent } from './menu.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    CarouselComponent,
    MenuComponent,    
    ],
  bootstrap:    [ AppComponent ]  
})
export class AppModule { }
