import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: "",
  //   component: AboutUsPageComponent,
  //   loadChildren: () => import('./about-us-page/about-us-page.module').then(m => m.AboutUsPageModule)
  // },
  // {
  //   path: "login",
  //   component: LoginPageComponent,
  //   loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule)
  // },
  // {
  //   path: "user",
  //   component: UserPageComponent,
  //   loadChildren: () => import('./user-page/user-page.module').then(m => m.UserPageModule)

  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
