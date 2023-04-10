import { Component } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-deactivate-club',
  templateUrl: './deactivate-club.component.html',
})
export class DeactivateClubComponent {
  selectedChatTitle!:string;
  
  constructor(private modalService:BsModalService){ }

  close(){
    this.modalService?.hide();
  }
}
