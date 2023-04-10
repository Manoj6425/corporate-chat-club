import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ConnectionsRoutingModule } from './connections-routing.module';
import { ConnectionsComponent } from './pages/connections.component';
import { MyConnectionsComponent } from './components/my-connections/my-connections.component';
import { AddConnectionComponent } from './components/add-connection/add-connection.component';



@NgModule({
  declarations: [
    ConnectionsComponent,
    MyConnectionsComponent,
    AddConnectionComponent
  ],
  imports: [
    CommonModule,
    ConnectionsRoutingModule,
    ModalModule.forRoot(),
  ]
})
export class ConnectionsModule { }
