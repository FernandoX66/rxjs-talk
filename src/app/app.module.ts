import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CreditCardModule } from './credit-card/credit-card.module';
import { CustomersModule } from './customers/customers.module';
import { NgModule } from '@angular/core';
import { TopBarModule } from './layout/top-bar.module';

const imports = [
  AppRoutingModule,
  BrowserModule,
  CreditCardModule,
  CustomersModule,
  TopBarModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [...imports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
