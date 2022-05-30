import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { EventBusService } from 'src/app/core/services/event-bus.service';
import { ObservableService } from 'src/app/core/services/observable.service';
import { EventType } from 'src/app/core/types/event-type';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers: any;
  darkTheme$: Observable<boolean> = of(false);

  constructor(
    private customersService: CustomersService,
    private eventBusService: EventBusService,
    private observableService: ObservableService
  ) {}

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe(({ data }) => {
      this.customers = data;
    });
    this.darkTheme$ = this.observableService.darkTheme$;
  }

  sendCustomerInformation(customer: any): void {
    const eventData = {
      name: EventType.CUSTOMER,
      value: customer,
    };
    this.eventBusService.emit(eventData);
  }
}
