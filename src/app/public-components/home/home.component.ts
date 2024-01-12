import { publishFacade } from '@angular/compiler';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { AuthorModel } from 'src/app/shared/models/authors.model';
import { CounterService } from 'src/app/shared/services/counter.service';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {

  @ViewChild('btnCounter') btnCounter : ElementRef;
  @ViewChild(AuthorsComponent) authComponent: AuthorsComponent;

  public count: number = 0;
  public test: boolean = true;
  public address: string = "India";
  public obj: AuthorModel = { id: 10, name: 'mitul'};

  constructor(public _testServices: TestService) { }

  ngOnDestroy(): void {
    console.log("Home component destroy")
  }

  ngAfterViewChecked(): void {
    console.log(this.authComponent.count);
  }

  ngAfterViewInit(): void {
    console.log(this.btnCounter);
    this.btnCounter.nativeElement.innerHTML = "Button text updated";
  }

  ngOnInit(): void {
    this.timer();
  }

  public counter(): void {
    this.count++;
    this.test = !this.test;
    this.obj.id = this.count++;
    this.address = this.address + this.count;
  }
  

  timer(): void {
    setInterval(() => {
      this.count++;
    },1000) 
  }

}
