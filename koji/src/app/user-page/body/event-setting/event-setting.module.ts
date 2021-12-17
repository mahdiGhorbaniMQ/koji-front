import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventSettingComponent } from './event-setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    EventSettingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatMenuModule  
  ]
})
export class EventSettingModule { }
