import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { InactiveClubsDetailsComponent } from './components/inactive-clubs-details/inactive-clubs-details.component';
import { UsersComponent } from './pages/users/users.component';
import { InactiveClubsComponent } from './pages/inactive-clubs/inactive-clubs.component';
import { ReactivateClubComponent } from './components/reactivate-club/reactivate-club.component';
import { InacticeClubDropdownComponent } from './components/inactice-club-dropdown/inactice-club-dropdown.component';
import { DeleteClubComponent } from './components/delete-club/delete-club.component';
import { LeaveClubComponent } from '../clubs/components/leave-club/leave-club.component';
import { MuteClubComponent } from '../clubs/components/mute-club/mute-club.component';



@NgModule({
  declarations: [
    AdminComponent,
    AddUserComponent,
    UsersDetailsComponent,
    InactiveClubsDetailsComponent,
    UsersComponent,
    InactiveClubsComponent,
    ReactivateClubComponent,
    InacticeClubDropdownComponent,
    DeleteClubComponent,
    LeaveClubComponent,
    MuteClubComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AgGridModule,
    BsDropdownModule.forRoot(),
    NgSelectModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class AdminModule { }
