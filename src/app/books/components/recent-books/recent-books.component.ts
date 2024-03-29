import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.scss']
})
export class RecentBooksComponent implements OnInit{

  constructor(private _bookService: BookService) {}

  public recentBooks: BookModel[];

  ngOnInit(): void {
    this.getRecentBooks();
  }
  private getRecentBooks(): void{
    
  }

}
