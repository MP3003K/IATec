

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Herramienta1Component } from './components/Herramientas/herramienta1/herramienta1.component';
import { Herramienta2Component } from './components/Herramientas/herramienta2/herramienta2.component';
import { LayoutComponent } from './Estructura/layout/layout.component';
import { Herramienta3Component } from './components/Herramientas/herramienta3/herramienta3.component';

const routes: Routes = [
{path:'', component:LayoutComponent,
children:[
  {path:'herramienta1',component:Herramienta1Component},
  {path:'herramienta2',component:Herramienta2Component},
  {path:'herramienta3',component:Herramienta3Component}
]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
