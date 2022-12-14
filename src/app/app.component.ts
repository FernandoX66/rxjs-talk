import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ObservableService } from './core/services/observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ang-practice';
  darkTheme$: Observable<boolean> = of(false);

  constructor(private observableService: ObservableService) {}

  ngOnInit(): void {
    this.darkTheme$ = this.observableService.darkTheme$;
  }
}
