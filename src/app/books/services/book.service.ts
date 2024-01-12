import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private allbooks = [
    {
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
    },
    {
      id: 2,
      title: "Journey Through Time",
      totalPage: 600,
      author: "Sophie Anderson",
      price: {
        currency: "INR",
        value: 450
      }
    },
    {
      id: 3,
      title: "Mysteries of the Cosmos",
      totalPage: 320,
      author: "David Peterson",
      price: {
        currency: "INR",
        value: 279
      }
    },
    {
      id: 4,
      title: "Recipes from Around the World",
      totalPage: 200,
      author: "Elena Martinez",
      price: {
        currency: "INR",
        value: 199
      }
    },
    {
      id: 6,
      title: "The Art of Zen Gardening",
      totalPage: 280,
      author: "Haruki Yamamoto",
      price: {
        currency: "JPY",
        value: 3500
      }
    },
    {
      id: 7,
      title: "Secrets of the Nile",
      totalPage: 400,
      author: "Amina Said",
      price: {
        currency: "EGP",
        value: 150
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
