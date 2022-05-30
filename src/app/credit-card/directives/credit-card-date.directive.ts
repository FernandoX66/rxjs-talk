import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCardDate]',
})
export class CreditCardDateDirective {
  constructor() {}

  @HostListener('input', ['$event.target'])
  onInput(input: HTMLInputElement): void {
    let formattedValue = input.value.replace(/\s+/g, '').replace(/\//g, '');
    if (formattedValue.length > 4) {
      formattedValue = formattedValue.slice(0, 4);
    }

    const date = [];
    for (let i = 0; i < formattedValue.length; i += 2) {
      date.push(formattedValue.slice(i, i + 2));
    }

    input.value = date.join('/');
  }
}
