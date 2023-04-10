import { Component } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-reactivate-club',
  templateUrl: './reactivate-club.component.html'
})
export class ReactivateClubComponent {
  constructor(private modalService:BsModalService){ }


  close(){
    this.modalService?.hide();
  }

  
}
