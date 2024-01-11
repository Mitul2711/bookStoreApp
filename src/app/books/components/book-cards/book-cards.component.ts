import { Component, Input } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.scss']
})
export class BookCardsComponent {
  @Input('allBooks')
  set books(books: BookModel[]) {
    books.map(x => x.title = 'Title: ' + x.title)
    this._books = books;
  }
  get books() {
    return this._books;
  }
  private _books: BookModel[];
}
