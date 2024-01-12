import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  constructor(private _bookService: BookService) {}

  ngOnInit(): void {
    
  }

  saveBook(value: any): void{
    const book: BookModel = new BookModel;
    book.title = value.title;
    book.author = value.author;
    book.totalPage = value.pages;
    book.price = {
      currency: "INR",
      value: value.price
    };
    book.isPublished = value.isPublished;
    book.publishedOn = value.publishedOn;
    this._bookService.addBook(book)
    console.log(book)
  }
  

}
