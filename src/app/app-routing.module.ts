import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [


  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**', redirectTo: 'dashboard', pathMatch: 'full'
  }
  // { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  // { path: 'gamer', component: GamerComponent, canActivate: [AuthGuard], data: { role: 'gamer' } },
  // { path: 'invitado', component: InvitadoComponent, canActivate: [AuthGuard], data: { role: 'invitado' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
