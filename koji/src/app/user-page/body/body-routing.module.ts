import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallenderComponent } from './callender/callender.component';
import { EventComponent } from './event/event.component';
import { GroupComponent } from './group/group.component';
import { HistoryComponent } from './history/history.component';
import { UserHomeComponent } from './user-home/user-home.component';


const routes: Routes = [
  {
    path: "home",
    component: UserHomeComponent,
    loadChildren: () => import('./user-home/user-home.module').then(m => m.UserHomeModule)
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
    path: "group/event",
    component: EventComponent,
    loadChildren: () => import('./event/event.module').then(m => m.EventModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
