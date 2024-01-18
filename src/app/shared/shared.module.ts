import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorAddressComponent } from './components/author-address/author-address.component';
import { HttpClientModule } from '@angular/common/http';
import { BoolformatPipe } from './pipes/boolformat.pipe';



@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorsComponent,
    AuthorAddressComponent,
    BoolformatPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [ToolbarComponent, FooterComponent, MaterialModule,AuthorsComponent,AuthorAddressComponent,HttpClientModule,BoolformatPipe]
})
export class SharedModule { }
