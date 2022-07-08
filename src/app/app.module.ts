import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CounterComponent } from './counter/counter.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShopingCardComponent } from './shoping-card/shoping-card.component';
import { FormsModule } from '@angular/forms';
import { ChnageUsernameComponent } from './chnage-username/chnage-username.component';
import { RegFormComponent } from './reg-form/reg-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    CounterComponent,
    ProductItemComponent,
    ShopingCardComponent,
    ChnageUsernameComponent,
    RegFormComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
