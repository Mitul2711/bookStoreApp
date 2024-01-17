import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

 

  public addBook(bookModel: BookModel): void {

  }

  public getBook(): Observable<BookModel[]> {
    return this._httpClient.get<BookModel[]>('https://localhost:7220/api/Bookmodels')
  }

  constructor(private _httpClient: HttpClient) { }

  

}
