import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
 
  constructor() { }

  public mydata: string;

  public status: boolean = true;
}
