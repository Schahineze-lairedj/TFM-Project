import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { EmpleadosComponent } from './empleados/empleados.component';

const routes: Routes = [
{path:'empleados',component:EmpleadosComponent},
{path:'dialog',component:DialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
