import { Component } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {
  value: number = 0;

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
}
