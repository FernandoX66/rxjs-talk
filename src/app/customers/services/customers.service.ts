import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CUSTOMERS } from '../constants/customers';

@Injectable()
export class CustomersService {
  url = 'https://store.free.beeceptor.com/';

  constructor() {}

  getCustomers(): Observable<any> {
    return of(CUSTOMERS);
  }
}
