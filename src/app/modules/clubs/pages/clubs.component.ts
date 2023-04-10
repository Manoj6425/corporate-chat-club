import { Component } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { DeactivateClubComponent } from '../components/deactivate-club/deactivate-club.component';
import { Club } from '../models/club.model';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html'
})
export class ClubsComponent {
  constructor(private modalService: BsModalService) { }
  modelRef!: BsModalRef;
  searchClub:string='';


  clubData: Club[] = [
    {
      id: 1, clubTitle: 'Bikers Adventure Club', imgUrl: '../../../../assets/bike-picture.png', clubDescription: `The Yamaha R15 V3 is a premium fully faired motorcycle in the 150cc
        `, noOfMembers: 230, clubCreatedBy: 'Manoj', createdOn: new Date().toDateString(), isPrivate: false, isMember: false, isRequestSent: false,
    },
    {
      id: 2, clubTitle: 'Iphone Users Club', imgUrl: '../../../../assets/iphone-picture.png', clubDescription: `The Yamaha R15 V3 is a premium fully faired motorcycle in the 150cc
        `, noOfMembers: 230, clubCreatedBy: 'sai', createdOn: new Date().toDateString(), isPrivate: false, isMember: false, isRequestSent: false,
    },
    {
      id: 3, clubTitle: 'Designers Club', imgUrl: '', clubDescription: `The Yamaha R15 V3 is a premium fully faired motorcycle in the 150cc
        `, noOfMembers: 230, clubCreatedBy: 'Ravi', createdOn: new Date().toDateString(), isPrivate: true, isMember: false, isRequestSent: false,
    },
    {
      id: 4, clubTitle: 'The Developers Club', imgUrl: '../../../../assets/Micosoft.net-picture.png', clubDescription: `The Yamaha R15 V3 is a premium fully faired motorcycle in the 150cc
        `, noOfMembers: 230, clubCreatedBy: 'Praveen', createdOn: new Date().toDateString(), isPrivate: true, isMember: false, isRequestSent: false,
    },
    {
      id: 5, clubTitle: 'Sports Authority Club', imgUrl: '../../../../assets/sports-picture.png', clubDescription: `The Yamaha R15 V3 is a premium fully faired motorcycle in the 150cc
        `, noOfMembers: 230, clubCreatedBy: 'Rohith', createdOn: new Date().toDateString(), isPrivate: true, isMember: false, isRequestSent: true,
    },
    {
      id: 6, clubTitle: 'Awesome Stuff Club', imgUrl: '../../../../assets/empty-picture.png', clubDescription: `The Yamaha R15 V3 is a premium fully faired motorcycle in the 150cc
        `, noOfMembers: 230, clubCreatedBy: 'vijay', createdOn: new Date().toDateString(), isPrivate: true, isMember: true, isRequestSent: false,
    }
  ]

  requestToJoin(id: number) {
    this.clubData.map(e => {
      if (e.id == id) {
        e.isRequestSent = true;
      }
    })
  }

  cancelRequest(id: number) {
    this.clubData.map(e => {
      if (e.id == id) {
        e.isRequestSent = false;
      }
    })
  }

  joinClub(id: number) {
    this.clubData.map(e => {
      if (e.id == id) {
        e.isMember = true;
        e.noOfMembers++;
      }
    })
  }

  exitClub(id: number) {
    this.clubData.map(e => {
      if (e.id == id) {
        e.isMember = false;
        e.noOfMembers--;
      }
    })
  }

  openDeactivateModel() {
    this.modelRef = this.modalService.show(DeactivateClubComponent, { class: 'small-modal' })
  }
}
