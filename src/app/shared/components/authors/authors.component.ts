import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { TestService } from '../../services/test.service';
import { AuthorModel } from '../../models/authors.model';
import { AuthorAddressComponent } from '../author-address/author-address.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {

  @ContentChild(AuthorAddressComponent) authAddress: AuthorAddressComponent;
  @Input() data: number;
  @Input() data2: boolean;
  @Input() author: AuthorModel
  public count: number = 0;
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

  ngOnDestroy(): void {
    console.log("Authors component destroy")
  }


  public incCount(): void{
    this.count++;
  }

}


