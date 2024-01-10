import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit{

  constructor(private route: ActivatedRoute) {}

  public id: number=0

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param['id']
    })

  }

}
