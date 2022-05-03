import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CajaComponent } from './caja/caja.component';
import { CajasComponent } from './cajas/cajas.component';
import { DialogComponent } from './pages/components/empleado-dialog/dialog.component';
import { StatsComponent } from './modules/statistics/components/panel/stats.component';
import { BarChartComponent } from './modules/statistics/components/stats-charts/bar-chart/bar-chart.component';
import { BubbleChartComponent } from './modules/statistics/components/stats-charts/bubble-chart/bubble-chart.component';
import { DoughnutChartComponent } from './modules/statistics/components/stats-charts/doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './modules/statistics/components/stats-charts/line-chart/line-chart.component';
import { RadarChartComponent } from './modules/statistics/components/stats-charts/radar-chart/radar-chart.component';
import { EmpleadoComponent } from './pages/components/empleado/empleado.component';
import { EmpleadosComponent } from './pages/components/empleados/empleados.component';
import { InventarioComponent } from './pages/components/inventario/inventario.component';
import { InventariosComponent } from './pages/components/inventarios/inventarios.component';
import { MesaComponent } from './pages/components/mesa/mesa.component';
import { MesasComponent } from './pages/components/mesas/mesas.component';
import { NegocioComponent } from './pages/components/negocio/negocio.component';
import { NegociosComponent } from './pages/components/negocios/negocios.component';
import { PedidoComponent } from './pages/components/pedido/pedido.component';
import { PedidosComponent } from './pages/components/pedidos/pedidos.component';
import { ProveedorIngredientesComponent } from './pages/components/proveedor-ingredientes/proveedor-ingredientes.component';
import { ProveedorServiciosComponent } from './pages/components/proveedor-servicios/proveedor-servicios.component';
import { ProveedorComponent } from './pages/components/proveedor/proveedor.component';
import { ProveedoresComponent } from './pages/components/proveedores/proveedores.component';
const routes: Routes = [
{path:'',redirectTo: 'estadisticas', pathMatch: 'full'},
{path:'estadisticas',component:StatsComponent},
{
  path: 'estadisticas', component: StatsComponent,
  children: [
    {path:'', redirectTo: 'line-chart', pathMatch: 'full'},
    {path:'line-chart',component:LineChartComponent},
    {path:'bar-chart',component:BarChartComponent},
    {path:'doughnut-chart',component:DoughnutChartComponent},
    {path:'radar-chart',component:RadarChartComponent},
    {path:'bubble-chart',component:BubbleChartComponent},

  ]
},

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
{path:'dialog',component:DialogComponent},
{path:'proveedor-ingredientes',component:ProveedorIngredientesComponent},
{path:'proveedor-servicios',component:ProveedorServiciosComponent},
{path: 'negocio/:id',component: NegocioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
