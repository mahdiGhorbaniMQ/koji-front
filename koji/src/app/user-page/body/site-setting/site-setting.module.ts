import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteSettingComponent } from './site-setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SiteSettingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SiteSettingModule { }
