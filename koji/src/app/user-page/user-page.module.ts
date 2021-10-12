import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page/user-page.component';
import { BodyModule } from './body/body.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { HeaderModule } from './header/header.module';



@NgModule({
  declarations: [
    UserPageComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    BodyModule,
    NavBarModule
  ],
  exports:[
    UserPageComponent
  ]
})
export class UserPageModule { }
