import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ObservableService } from 'src/app/core/services/observable.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  darkTheme$: Observable<boolean> = of(false);

  constructor(private observableService: ObservableService) {}

  ngOnInit(): void {
    this.darkTheme$ = this.observableService.darkTheme$;
  }
}
