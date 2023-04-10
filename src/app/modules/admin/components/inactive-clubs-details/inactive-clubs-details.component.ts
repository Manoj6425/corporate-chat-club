import { Component } from '@angular/core';

import { GridOptions } from 'ag-grid-community';
import { BsModalService } from 'ngx-bootstrap/modal';
import { InacticeClubDropdownComponent } from '../inactice-club-dropdown/inactice-club-dropdown.component';
import { LeaveClubComponent } from '../../../clubs/components/leave-club/leave-club.component';
import { MuteClubComponent } from '../../../clubs/components/mute-club/mute-club.component';

@Component({
  selector: 'app-inactive-clubs-details',
  templateUrl: './inactive-clubs-details.component.html',
})
export class InactiveClubsDetailsComponent {

  constructor(private modalService:BsModalService){ }
  modelRef:any;

  employeeGrid: GridOptions = {
    rowHeight: 50,
    headerHeight: 30,
    columnDefs: [
      { headerName: 'CLUB TITLE', field: 'clubTitle' },
      { headerName: 'CREATED BY', field: 'createdBy',cellRenderer: this.multipleLineActivated },
      { headerName: 'CLUB TYPE', field: 'clubType' },
      { headerName: 'DEACTIVATED BY', field: 'deactivatedBy',cellRenderer: this.multipleLineDeactivated}, 
      { headerName: 'REASON', field: 'reason' },
      {
        headerName: 'ACTION',
        field: 'actions',
        cellRenderer: InacticeClubDropdownComponent,
        // pinned: 'left',
      },
    ],
    rowData: [
      {
        clubTitle: 'Team Outing Club',
        createdBy: {authorizor:'Vinay Ram Kundrapu',date:new Date()},
        clubType: 'Public-Open Club',
        deactivatedBy: {authorizor:'Vinay Ram Kundrapu', date:new Date()},
        reason: 'why should I tell u',
        actions: '',
      },
      {
        clubTitle: 'Team Outing Club',
        createdBy: {authorizor:'Vinay Ram Kundrapu',date:new Date()},
        clubType: 'Public-Open Club',
        deactivatedBy: {authorizor:'Vinay Ram Kundrapu', date:new Date()},
        reason: 'why should I tell u',
        actions: '',
      },
      {
        clubTitle: 'Team Outing Club',
        createdBy: {authorizor:'Vinay Ram Kundrapu',date:new Date()},
        clubType: 'Public-Open Club',
        deactivatedBy: {authorizor:'Vinay Ram Kundrapu', date:new Date()},
        reason: 'why should I tell u',
        actions: '',
      },
      {
        clubTitle: 'Team Outing Club',
        createdBy: {authorizor:'Vinay Ram Kundrapu',date:new Date()},
        clubType: 'Public-Open Club',
        deactivatedBy: {authorizor:'Vinay Ram Kundrapu', date:new Date()},
        reason: 'why should I tell u',
        actions: '',
      },
      {
        clubTitle: 'Team Outing Club',
        createdBy: {authorizor:'Vinay Ram Kundrapu',date:new Date()},
        clubType: 'Public-Open Club',
        deactivatedBy: {authorizor:'Vinay Ram Kundrapu', date:new Date()},
        reason: 'why should I tell u',
        actions: '',
      },

      
    ],

    defaultColDef: { minWidth: 232.5 },
    // pagination: true,
    paginationPageSize: 4,
  };

  multipleLineActivated(params:any){
    return `<p> ${params.data.createdBy.authorizor} </p>
    <span class="text-secondary text-small">${params.data.createdBy.date.toDateString()}</span>`;
  }

  multipleLineDeactivated(params:any){
    return `<p> ${params.data.deactivatedBy.authorizor} </p>
    <span class="text-secondary text-small">${params.data.deactivatedBy.date.toDateString()}</span>`;
  }

  

  // openLeaveModel(){
  //   this.modelRef = this.modalService.show(LeaveClubComponent , {class: 'small-modal'})
  // }

  // openMuteModel(){
  //   this.modelRef = this.modalService.show(MuteClubComponent , {class: 'small-modal'})
  // }
}
