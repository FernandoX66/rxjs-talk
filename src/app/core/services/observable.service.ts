import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ObservableService {
  private darkTheme = new BehaviorSubject<boolean>(false);

  constructor() {}

  get darkTheme$() {
    return this.darkTheme.asObservable();
  }

  toggleDarkTheme() {
    if (this.darkTheme.value) {
      this.darkTheme.next(false);
    } else {
      this.darkTheme.next(true);
    }
  }
}
