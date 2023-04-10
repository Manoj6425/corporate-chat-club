import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgpSortModule } from "ngp-sort-pipe";

import { MyHomeRoutingModule } from './my-home-routing.module';
import { MyHomeComponent } from './pages/my-home.component';
import { MyClubsComponent } from './pages/my-clubs/my-clubs.component';
import { MyThreadsComponent } from './pages/my-threads/my-threads.component';
import { MyClubsListComponent } from './components/my-clubs-list/my-clubs-list.component';
import { MyClubsChatComponent } from './components/my-clubs-chat/my-clubs-chat.component';
import { ClubGroupInfoComponent } from './components/club-group-info/club-group-info.component';
import { MyThreadsListComponent } from './components/my-threads-list/my-threads-list.component';
import { MyThreadsChatComponent } from './components/my-threads-chat/my-threads-chat.component';





@NgModule({
  declarations: [
    MyHomeComponent,
    MyClubsComponent,
    MyThreadsComponent,
    MyClubsListComponent,
    MyClubsChatComponent,
    ClubGroupInfoComponent,
    MyThreadsListComponent,
    MyThreadsChatComponent
  ],
  imports: [
    CommonModule,
    MyHomeRoutingModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgpSortModule,
    ModalModule.forRoot(),
  ]
})
export class MyHomeModule { }
