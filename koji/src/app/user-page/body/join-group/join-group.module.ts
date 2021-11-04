import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinGroupComponent } from './join-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    JoinGroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class JoinGroupModule { }
