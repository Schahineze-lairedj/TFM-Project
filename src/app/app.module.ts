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

import { DialogComponent } from './pages/components/empleado-dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NegocioComponent } from './pages/components/negocio/negocio.component';
import { EmpleadoComponent } from './pages/components/empleado/empleado.component';
import { PedidoComponent } from './pages/components/pedido/pedido.component';
import { CajasComponent } from './cajas/cajas.component';
import { CajaComponent } from './caja/caja.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { ChartsModule } from 'ng2-charts';
import { DialogNegocioComponent } from './pages/components/negocio-dialog/dialog-negocio.component';
import { DialogMComponent } from './pages/components/mesa-dialog/dialog-m.component';
import { EmpleadosComponent } from './pages/components/empleados/empleados.component';
import { NegociosComponent } from './pages/components/negocios/negocios.component';
import { MesasComponent } from './pages/components/mesas/mesas.component';
import { MesaComponent } from './pages/components/mesa/mesa.component';
import { PedidosComponent } from './pages/components/pedidos/pedidos.component';
import { ProveedoresComponent } from './pages/components/proveedores/proveedores.component';
import { ProveedorComponent } from './pages/components/proveedor/proveedor.component';
import { InventariosComponent } from './pages/components/inventarios/inventarios.component';
import { ProveedorServiciosComponent } from './pages/components/proveedor-servicios/proveedor-servicios.component';
import { InventarioComponent } from './pages/components/inventario/inventario.component';
import { ProveedorIngredientesComponent } from './pages/components/proveedor-ingredientes/proveedor-ingredientes.component';
import { StatisticsModule } from './modules/statistics/statistics.module';
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
    ProveedorServiciosComponent,
    ProveedorIngredientesComponent,
    DialogNegocioComponent,
    DialogMComponent,

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
