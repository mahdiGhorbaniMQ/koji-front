import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { BodyRoutingModule } from './body-routing.module';



@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule
  ],
  exports:[
    BodyComponent
  ]
})
export class BodyModule { }
