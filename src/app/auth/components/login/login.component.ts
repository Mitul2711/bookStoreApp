import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private route: ActivatedRoute) {}

  public name: string = ''
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryparam) => {
      this.name = queryparam['name']
      console.log(queryparam)
    })
  }

}
