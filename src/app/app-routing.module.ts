
import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Herramienta1Component } from './components/Herramientas/herramienta1/herramienta1.component';
import { Herramienta2Component } from './components/Herramientas/herramienta2/herramienta2.component';

const routes: Routes = [
{path:'', component:LayoutComponent,
children:[
  {path:'herramienta1',component:Herramienta1Component},
  {path:'herramienta2',component:Herramienta2Component},
]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
