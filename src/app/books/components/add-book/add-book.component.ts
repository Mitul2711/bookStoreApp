import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  constructor(private _bookService: BookService) {}

  @ViewChild('myForms') myForms: NgForm;

  public model : BookModel;

  ngOnInit(): void {
    this.model = new BookModel();
    this.model.title = "";
    this.model.author = "";
    this.model.totalPage;
    this.model.price = {
      value: 100,
      currency: ''
    };
    this.model.isPublished = true;
  }

  prices: any[] = [
    {value: 100, viewValue: '100 INR'},
    {value: 200, viewValue: '200 INR'},
    {value: 300, viewValue: '300 INR'},
  ];

  saveBook(): void{

    if(this.myForms.valid) {
      this._bookService.addBook(this.model);
    }
    else {
      alert('Invalid Form');
    }

    
  }
  

}
