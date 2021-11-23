import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header/header.component';




const routes: Routes = [
  {path: '',component: HomeComponent },
  {path:'login',component: LoginComponent},
  {path:'dashboard',
    loadChildren:() => import('./dashboard/dashboard.module').then(dashboard=> dashboard.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
