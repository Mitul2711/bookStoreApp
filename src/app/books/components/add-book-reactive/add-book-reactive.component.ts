import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.scss']
})

export class AddBookReactiveComponent implements OnInit {

  Currencies: any[] = [
    { value: 'USD', viewValue: 'US Dollar' },
    { value: 'INR', viewValue: 'Indian Ruppes' },
    { value: 'CAD', viewValue: 'Canadian Dollar' },
  ];

  public addBookForm: FormGroup;

  private intiForm(): void {
    this.addBookForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(5)]),
      author: new FormControl('', Validators.required),
      totalPage: new FormControl(),
      price: new FormGroup({
        currency: new FormControl(),
        value: new FormControl()
      }),
      publishedOn: new FormControl(),
      isPublished: new FormControl()
    });
  }

  constructor(private _bookService: BookService) {}

  ngOnInit(): void {
      this.intiForm();
  }

  updateFormValue(): void {
    this.addBookForm.patchValue({
      title: "mitul",
      author: "Jay"
    })
  }

  saveBook(): void{
    console.log(this.addBookForm.value)

    if(this.addBookForm.valid) {
      this._bookService.addBook(this.addBookForm.value);
    }
    else {
      alert('Invalid Form');
    }

    
  }


}
