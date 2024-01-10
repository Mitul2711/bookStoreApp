import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  public counter: number = 0;
  constructor() { }

  public incCounter() {
    this.counter++;
  }
  public decCounter() {
    this.counter--;
  }
}
