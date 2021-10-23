import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageSearchComponent } from './user-page-search/user-page-search.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    UserPageSearchComponent,
    HeaderSearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
