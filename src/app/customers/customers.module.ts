import { CommonModule } from '@angular/common';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomersService } from './services/customers.service';
import { NgModule } from '@angular/core';
import { CustomerComponent } from './components/customer/customer.component';

const components = [CustomersComponent, CustomerComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
  providers: [CustomersService],
})
export class CustomersModule {}
