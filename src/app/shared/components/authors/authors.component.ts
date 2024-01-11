import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TestService } from '../../services/test.service';
import { AuthorModel } from '../../models/authors.model';
import { AuthorAddressComponent } from '../author-address/author-address.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {

  @ContentChild(AuthorAddressComponent) authAddress: AuthorAddressComponent;
  @Input() data: number;
  @Input() data2: boolean;
  @Input() author: AuthorModel

  constructor() {}
  ngAfterContentInit(): void {
    console.log('After content Init ' + this.authAddress?.address)
  }
  ngAfterContentChecked(): void {
    console.log('after content checked ' + this.authAddress?.address)
   }

  ngDoCheck(): void {
      console.log(this.author)
  }

  ngOnInit(): void {
  
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }
}


