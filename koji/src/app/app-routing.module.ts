import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page/about-us-page/about-us-page.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { UserPageComponent } from './user-page/user-page/user-page.component';

const routes: Routes = [
  {
    path: "",
    component: AboutUsPageComponent,
    loadChildren: () => import('./about-us-page/about-us-page.module').then(m => m.AboutUsPageModule)
  },
  {
    path: "login",
    component: LoginPageComponent,
    loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: "user",
    component: UserPageComponent,
    loadChildren: () => import('./user-page/user-page.module').then(m => m.UserPageModule)

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
