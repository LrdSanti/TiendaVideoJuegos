import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { GamerComponent } from './pages/gamer/gamer.component';
import { InvitadoComponent } from './pages/invitado/invitado.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    GamerComponent,
    InvitadoComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
