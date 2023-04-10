import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'my-home', loadChildren: () => import('./modules/my-home/my-home.module').then(m => m.MyHomeModule) },
  { path: 'connections', loadChildren: () => import('./modules/connections/connections.module').then(m => m.ConnectionsModule) },
  { path: 'clubs', loadChildren: () => import('./modules/clubs/clubs.module').then(m => m.ClubsModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
