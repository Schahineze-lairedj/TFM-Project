import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CajaComponent } from './caja/caja.component';
import { CajasComponent } from './cajas/cajas.component';
import { DialogComponent } from './dialog/dialog.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { InventarioComponent } from './inventario/inventario.component';
import { InventariosComponent } from './inventarios/inventarios.component';
import { MesaComponent } from './mesa/mesa.component';
import { MesasComponent } from './mesas/mesas.component';
import { NegocioComponent } from './negocio/negocio.component';
import { NegociosComponent } from './negocios/negocios.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';

const routes: Routes = [
{path:'',component:NegociosComponent},
{path:'negocios',component:NegociosComponent},
{path:'negocio',component:NegocioComponent},
{path:'empleados',component:EmpleadosComponent},
{path:'empleado',component:EmpleadoComponent},
{path:'mesas',component:MesasComponent},
{path:'mesa',component:MesaComponent},
{path:'pedidos',component:PedidosComponent},
{path:'pedido',component:PedidoComponent},
{path:'cajas',component:CajasComponent},
{path:'caja',component:CajaComponent},
{path:'proveedores',component:ProveedoresComponent},
{path:'proveedor',component:ProveedorComponent},
{path:'inventarios',component:InventariosComponent},
{path:'inventario',component:InventarioComponent},
{path:'dialog',component:DialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
