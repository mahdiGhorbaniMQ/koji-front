import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserPageSearchComponent } from './user-page-search/user-page-search.component';
import { HeaderSearchComponent } from './header-search/header-search.component';



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
