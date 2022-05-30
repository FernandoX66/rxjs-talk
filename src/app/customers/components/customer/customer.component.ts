import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventBusService } from 'src/app/core/services/event-bus.service';
import { ObservableService } from 'src/app/core/services/observable.service';
import { EventType } from 'src/app/core/types/event-type';

@Component({
  selector: 'app-customers-b',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customer: any = {
    name: '',
    email: '',
    phone: '',
  };
  darkTheme$: Observable<boolean> = of(false);

  constructor(
    private eventBusService: EventBusService,
    private observableService: ObservableService
  ) {}

  ngOnInit(): void {
    this.eventBusService.on(EventType.CUSTOMER, (customer: any) => {
      this.customer = customer;
    });
    this.darkTheme$ = this.observableService.darkTheme$;
  }

  changeTheme(): void {
    this.observableService.toggleDarkTheme();
  }
}
