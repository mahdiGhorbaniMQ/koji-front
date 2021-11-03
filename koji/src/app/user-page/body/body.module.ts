import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyRoutingModule } from './body-routing.module';
import { BodyComponent } from './body.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ProfileComponent } from './profile/profile.component';
import { JoinGroupComponent } from './join-group/join-group.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { GroupSettingComponent } from './group-setting/group-setting.component';
import { EventSettingComponent } from './event-setting/event-setting.component';
import { SiteSettingComponent } from './site-setting/site-setting.component';
import { HistoryComponent } from './history/history.component';



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
