import { Component } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { BsModalService } from 'ngx-bootstrap/modal';

import { DeleteClubComponent } from '../delete-club/delete-club.component';
import { ReactivateClubComponent } from '../reactivate-club/reactivate-club.component';

@Component({
  selector: 'app-inactice-club-dropdown',
  templateUrl: './inactice-club-dropdown.component.html',
})
export class InacticeClubDropdownComponent implements ICellRendererAngularComp{

  constructor(private modalService:BsModalService){ }
  modelRef:any;

  agInit(params: ICellRendererParams): void {

  }
    refresh(params: ICellRendererParams) {
  
  return false;
  
}

openActivateModel(){
  this.modelRef = this.modalService.show(ReactivateClubComponent , {class: 'small-modal'})
}

deleteClubModel(){
  this.modelRef = this.modalService.show(DeleteClubComponent , {class: 'small-modal'})
}

}
