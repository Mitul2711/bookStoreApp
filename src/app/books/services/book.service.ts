import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

 

  public addBook(bookModel: BookModel): void {

  }

  public getBook(): void {

  }

  constructor(private _httpClient: HttpClient) { }

  

}
