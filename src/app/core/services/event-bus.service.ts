import { Injectable } from '@angular/core';
import { filter, map, Subject, Subscription } from 'rxjs';
import { EventData } from 'src/app/shared/interfaces/event-data.interface';
import { EventType } from '../types/event-type';

@Injectable({ providedIn: 'root' })
export class EventBusService {
  private subject = new Subject<EventData>();

  constructor() {}

  emit(event: EventData): void {
    this.subject.next(event);
  }

  on(eventName: EventType, action: any): Subscription {
    return this.subject
      .pipe(
        filter((e: EventData) => e.name === eventName),
        map((e: EventData) => e['value'])
      )
      .subscribe(action);
  }
}
