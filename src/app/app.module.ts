import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatListModule} from '@angular/material/list';

import { EmpleadosComponent } from './empleados/empleados.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NegociosComponent } from './negocios/negocios.component';
import { NegocioComponent } from './negocio/negocio.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { MesasComponent } from './mesas/mesas.component';
import { MesaComponent } from './mesa/mesa.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PedidoComponent } from './pedido/pedido.component';
import { CajasComponent } from './cajas/cajas.component';
import { CajaComponent } from './caja/caja.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { InventariosComponent } from './inventarios/inventarios.component';
import { InventarioComponent } from './inventario/inventario.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { StatsComponent } from './statistics/panel/stats.component';
import { LineChartComponent } from './stats-charts/line-chart/line-chart.component';
import { BarChartComponent } from './stats-charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './stats-charts/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './stats-charts/radar-chart/radar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { StatisticsModule } from './statistics/statistics.module';
import { BubbleChartComponent } from './stats-charts/bubble-chart/bubble-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    DialogComponent,
    HeaderComponent,
    FooterComponent,
    NegociosComponent,
    NegocioComponent,
    EmpleadoComponent,
    MesasComponent,
    MesaComponent,
    PedidosComponent,
    PedidoComponent,
    CajasComponent,
    CajaComponent,
    ProveedoresComponent,
    ProveedorComponent,
    InventariosComponent,
    InventarioComponent,



  ],
  imports: [
    FlexLayoutModule,
    MatDividerModule,
    MatSidenavModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule,
    MatTableModule,
    //MatTableDataSource,
    MatPaginatorModule,
    MatSortModule,

    StatisticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
