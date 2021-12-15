import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventSettingComponent } from './event-setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [
    EventSettingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()  ]
})
export class EventSettingModule { }
