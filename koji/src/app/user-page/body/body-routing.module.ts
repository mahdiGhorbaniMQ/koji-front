import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallenderComponent } from './callender/callender.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventSettingComponent } from './event-setting/event-setting.component';
import { EventComponent } from './event/event.component';
import { GroupProfileComponent } from './group-profile/group-profile.component';
import { GroupSettingComponent } from './group-setting/group-setting.component';
import { GroupComponent } from './group/group.component';
import { HistoryComponent } from './history/history.component';
import { JoinGroupComponent } from './join-group/join-group.component';
import { ProfileComponent } from './profile/profile.component';
import { SiteSettingComponent } from './site-setting/site-setting.component';
import { UserHomeComponent } from './user-home/user-home.component';


const routes: Routes = [
  {
    path: "home",
    component: UserHomeComponent,
    loadChildren: () => import('./user-home/user-home.module').then(m => m.UserHomeModule)
  },
  {
    path: "createEvent",
    component: CreateEventComponent,
    loadChildren: () => import('./create-event/create-event.module').then(m => m.CreateEventModule)
  },
  {
    path: "createGroup",
    component: UserHomeComponent,
    loadChildren: () => import('./create-group/create-group.module').then(m => m.CreateGroupModule)
  },
  {
    path: "joinGroup",
    component: JoinGroupComponent,
    loadChildren: () => import('./join-group/join-group.module').then(m => m.JoinGroupModule)
  },
  {
    path: "profile",
    component: ProfileComponent,
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: "setting",
    component: SiteSettingComponent,
    loadChildren: () => import('./site-setting/site-setting.module').then(m => m.SiteSettingModule)
  },
  {
    path: "callender",
    component: CallenderComponent,
    loadChildren: () => import('./callender/callender.module').then(m => m.CallenderModule)
  },
  {
    path: "history",
    component: HistoryComponent,
    loadChildren: () => import('./history/history.module').then(m => m.HistoryModule)
  },

  {
    path: "group",
    component: GroupComponent,
    loadChildren: () => import('./group/group.module').then(m => m.GroupModule)
  },
  {
    path: "group/profile",
    component: GroupProfileComponent,
    loadChildren: () => import('./group-profile/group-profile.module').then(m => m.GroupProfileModule)
  },
  {
    path: "group/event",
    component: EventComponent,
    loadChildren: () => import('./event/event.module').then(m => m.EventModule)
  },
  {
    path: "group/event/setting",
    component: EventSettingComponent,
    loadChildren: () => import('./event-setting/event-setting.module').then(m => m.EventSettingModule)
  },
  {
    path: "group/setting",
    component: GroupSettingComponent,
    loadChildren: () => import('./group-setting/group-setting.module').then(m => m.GroupSettingModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
