import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCardNumber]',
})
export class CreditCardNumberDirective {
  constructor() {}

  @HostBinding('style.border')
  border: string = '';

  @HostListener('input', ['$event.target'])
  onInput(input: HTMLInputElement): void {
    let formattedValue = input.value.replace(/\s+/g, '');
    this.border = '';
    if (!/^[0-9]*$/g.test(formattedValue)) {
      this.border = '1px solid red';
    }

    if (formattedValue.length > 16) {
      formattedValue = formattedValue.slice(0, 16);
    }

    const numbers = [];
    for (let i = 0; i < formattedValue.length; i += 4) {
      numbers.push(formattedValue.slice(i, i + 4));
    }

    input.value = numbers.join(' ');
  }
}
