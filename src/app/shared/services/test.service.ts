import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  static testService: any;

  
  constructor() { }

  public status: boolean = true;
}
