import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-leave-club',
  templateUrl: './leave-club.component.html',
  styles: [
  ]
})
export class LeaveClubComponent {
  selectedChatTitle!:string;
  constructor(private modalService: BsModalService) { 
    
  }


  close() {
    this.modalService?.hide();
  }
}
