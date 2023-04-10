import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './pages/admin.component';
import { UsersComponent } from './pages/users/users.component';
import { InactiveClubsDetailsComponent } from './components/inactive-clubs-details/inactive-clubs-details.component';


const routes: Routes = [
  {path:'',component:AdminComponent,children:[
    {path:'users',component:UsersComponent},
    {path:"inactive-clubs",component:InactiveClubsDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
