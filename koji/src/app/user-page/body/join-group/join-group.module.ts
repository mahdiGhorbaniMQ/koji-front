import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinGroupComponent } from './join-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    JoinGroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule
  ]
})
export class JoinGroupModule { }
