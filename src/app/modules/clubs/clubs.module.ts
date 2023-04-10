import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ClubsRoutingModule } from './clubs-routing.module';
import { ClubsComponent } from './pages/clubs.component';
import { AllClubDetailsComponent } from './components/all-club-details/all-club-details.component';
import { AddClubComponent } from './components/add-club/add-club.component';
import { DeactivateClubComponent } from './components/deactivate-club/deactivate-club.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClubsComponent,
    AllClubDetailsComponent,
    AddClubComponent,
    DeactivateClubComponent,
  ],
  imports: [
    CommonModule,
    ClubsRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    Ng2SearchPipeModule,
    FormsModule,
  ],
})
export class ClubsModule {}
