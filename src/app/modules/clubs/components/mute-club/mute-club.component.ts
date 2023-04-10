import { Component } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-mute-club',
  templateUrl: './mute-club.component.html',
  styles: [
  ]
})
export class MuteClubComponent {
  selectedChatTitle!:string;
  constructor(private modalService: BsModalService) { }


  close() {
    this.modalService?.hide();
  }
}
