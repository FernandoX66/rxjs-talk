import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { CreditCardNumberDirective } from './directives/credit-card.directive';
import { CreditCardDateDirective } from './directives/credit-card-date.directive';

@NgModule({
  declarations: [
    CreditCardComponent,
    CreditCardNumberDirective,
    CreditCardDateDirective,
  ],
  imports: [CommonModule],
  exports: [CreditCardComponent],
})
export class CreditCardModule {}
