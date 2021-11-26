import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NotFoundModule { }
