import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from '../dashboard/dashboard-routing.module';
import { DirectivaComponent } from '../directiva/directiva/directiva.component';
import { NutricionistasComponent } from '../nutricionistas/nutricionistas/nutricionistas.component';
import {NutricionistaService} from '../nutricionistas/nutricionista.service';
import { RecetasComponent } from '../recetas/recetas.component';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [
    DirectivaComponent,
    NutricionistasComponent,
    RecetasComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule

  ],
  providers:[
    NutricionistaService
  ]
})
export class DashboardModule { }
