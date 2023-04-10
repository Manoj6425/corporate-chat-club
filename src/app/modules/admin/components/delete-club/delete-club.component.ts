import { Component } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete-club',
  templateUrl: './delete-club.component.html'
})
export class DeleteClubComponent {
  constructor(private modalService: BsModalService) { }


  close() {
    this.modalService?.hide();
  }
}
