import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard.component'
import { DirectivaComponent } from '../directiva/directiva/directiva.component';
import { NutricionistasComponent } from '../nutricionistas/nutricionistas/nutricionistas.component';
import {NutricionistaService} from '../nutricionistas/nutricionista.service';
import { RecetasComponent } from '../recetas/recetas.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
    {
      path:'',
      component: DashboardComponent,
      children: [
        {
          path:'home',
          component:HomeComponent
        },
        {
          path:'recetas',
          component: RecetasComponent
        },
        {
          path:'nutricionistas',
          component: NutricionistasComponent
        }
      ]
    },
    {
      path:'**' , redirectTo:''
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }
  