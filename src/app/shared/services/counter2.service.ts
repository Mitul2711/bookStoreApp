import { Injectable } from '@angular/core';
import { TestService } from './test.service';
import { CounterService } from './counter.service';

@Injectable()
export class Counter2Service {

  public counter: number = 0;
  constructor(private _testservice: TestService) { }

  public incCounter() {
    this.counter+=2;
  }
  public decCounter() {
    this.counter-=2;
  }
}
