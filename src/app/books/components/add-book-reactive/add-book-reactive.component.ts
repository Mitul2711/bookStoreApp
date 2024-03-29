import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    this.addBookForm = this._formBuilder.group ({
      title: ['Mitul', [Validators.required, Validators.minLength(5)]],
      // author: ['', Validators.required],
      totalPage: '',
      price: this._formBuilder.group({
        currency: '',
        value: ''
      }),
      publishedOn: '',
      isPublished: '',
      formatType: '',
      pdfFormat: '',
      docFormat: '',
      authors: this._formBuilder.array([this.getAuthorControl()])
    });
  }

  private getAuthorControl() : FormGroup {
    return this._formBuilder.group({
      fullName: '',
      address: ''
    });
}

public get authors() {
  return <FormArray>this.addBookForm.get('authors');
}


  constructor(private _bookService: BookService, private _formBuilder: FormBuilder) {}

  public titleErrorMessage: string;
  public authorErrorMessage: string;

  ngOnInit(): void {
      this.intiForm();

      const titleControl = this.addBookForm.get('title');
      titleControl?.valueChanges.subscribe(x => {
        this.validateTitleControl(titleControl as FormControl)
      });

      const authorControl = this.addBookForm.get('author');
      authorControl?.valueChanges.subscribe(x => {
        this.validateAuthorControl(authorControl as FormControl);
      })

      const formatTypeControl = this.addBookForm.get('formatType');
      formatTypeControl?.valueChanges.subscribe(x => {
        this.formatTypeChanged(x);
      })
  }

  public addMoreAuthor(): void {
    this.authors.push(this.getAuthorControl());
  }

  public removeAuthor(i: number): void {
    this.authors.removeAt(i);
  }

  saveBook(): void{
    console.log(this.addBookForm.value)

    if(this.addBookForm.valid) {
      this._bookService.addBook(this.addBookForm.value).subscribe(x=>{
        console.log(x);
      })
    }
    else {
      alert('Invalid Form');
    }
  }

  

  private validateTitleControl(titleControl: FormControl): void {
    this.titleErrorMessage = '';
    if(titleControl.errors && (titleControl.touched || titleControl.dirty)) {
      if(titleControl.errors?.['required']) {
        this.titleErrorMessage = 'This is a required field';
      } else if (titleControl.errors?.['minlength']) {
        this.titleErrorMessage = 'minimum length is 5';
      }
    }
  }

  private validateAuthorControl(authorControl: FormControl) : void {
    this.authorErrorMessage = '';
    if(authorControl.errors && (authorControl.touched || authorControl.dirty)) {
      this.authorErrorMessage = 'Please enter the name of author';
    }
  }

  private formatTypeChanged(formatType: string): void {
    const pdfControl = this.addBookForm.get('pdfFormat');
    const docControl = this.addBookForm.get('docFormat');

    if (formatType === 'pdf') {
      pdfControl?.addValidators([Validators.required, Validators.minLength(5)]);
      docControl?.clearValidators();
    } else if (formatType === 'doc') {
      docControl?.addValidators(Validators.required);
      pdfControl?.clearValidators();
    }

    pdfControl?.updateValueAndValidity();
    docControl?.updateValueAndValidity();

  }

  

}
