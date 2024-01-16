import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private allbooks = [
    {
      id: 1,
      title: "epic adventures",
      totalPage: 550,
      author: "Alice Turner",
      price: {
        currency: "USD",
        value: 12.99
      }
    },
    {
      id: 2,
      title: "the ups and downs of life",
      totalPage: 456,
      author: "Jay Malhotra",
      price: {
        currency: "INR",
        value: 299
      }
    }
  ];

  public addBook(bookModel: BookModel): void {
    this.allbooks.push(bookModel);
  }

  constructor() { }

  public getBooks(): any[] {
    return this.allbooks;
  }

  public recentBooks(): any[] {
    return [ {
      id: 5,
      title: "epic adventures",
      totalPage: 550,
      author: "Alice Turner",
      price: {
        currency: "USD",
        value: 12.99
      }
    },
    {
      id: 1,
      title: "the ups and downs of life",
      totalPage: 456,
      author: "Jay Malhotra",
      price: {
        currency: "INR",
        value: 299
      }
    }]
  }

}
