import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AdminComponent } from './pages/admin/admin.component';
import { GamerComponent } from './pages/gamer/gamer.component';
import { InvitadoComponent } from './pages/invitado/invitado.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [

  { path: '', redirectTo: '/dashboard/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  {
    path: 'inicio', component: InicioComponent,
    children: [
      {path: 'admin', component: AdminComponent},
      {path: 'gamer', component: GamerComponent},
      {path: 'invitado', component: InvitadoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
