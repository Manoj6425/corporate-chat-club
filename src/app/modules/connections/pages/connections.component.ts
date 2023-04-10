import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddConnectionComponent } from '../components/add-connection/add-connection.component';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html'
})
export class ConnectionsComponent {
  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService) {}
  
  connections = [
    {
      name: "Rakesh Mishra",
      about: "I love Myself",
      mutual: "22 in Mutual",
      email: "prakash.y@blizzard.com",
      phoneNumber: "+91 45690 01231",
    },
    {
      name: "Vijay Prakash Yalamanchili",
      about: "Power of sales",
      mutual: "22 in Mutual",
      email: "prakash.y@blizzard.com",
      phoneNumber: "+91 45690 01231",
    },
    {
      name: "Jaya Chandra Chilaka",
      about: "Be you, Believe in you",
      mutual: "22 in Mutual",
      email: "prakash.y@blizzard.com",
      phoneNumber: "+91 45690 01231",
    },
    {
      name: "Ankitha Jain",
      about: "Amazing talent never come up...",
      mutual: "22 in Mutual",
      email: "prakash.y@blizzard.com",
      phoneNumber: "+91 45690 01231",
    },
    {
      name: "Anamika Juliot",
      about: "Never underestimate a man's talent",
      mutual: "22 in Mutual",
      email: "prakash.y@blizzard.com",
      phoneNumber: "+91 45690 01231",
    },
    {
      name: "Yash Jayaraj",
      about: "I'm designed",
      mutual: "22 in Mutual",
      email: "prakash.y@blizzard.com",
      phoneNumber: "+91 45690 01231",
    },
    {
      name: "Amit Mishra",
      about: "I Love Myself",
      mutual: "22 in Mutual",
      email: "prakash.y@blizzard.com",
      phoneNumber: "+91 45690 01231",
    },
    {
      name: "Samantha Ruthu Prabhu",
      about: "Power of sales",
      mutual: "22 in Mutual",
      email: "prakash.y@blizzard.com",
      phoneNumber: "+91 45690 01231",
    },
    {
      name: "Pravallika M",
      about: "Be you, Believe in you",
      mutual: "22 in Mutual",
      email: "prakash.y@blizzard.com",
      phoneNumber: "+91 45690 01231",
    },
    {
      name: "Naga Chaitanya",
      about: "Amazing talent never come up...",
      mutual: "22 in Mutual",
      email: "prakash.y@blizzard.com",
      phoneNumber: "+91 45690 01231",
    },
    {
      name: "Trinath Mallavarapu",
      about: "Never underestimate a man's talent",
      mutual: "22 in Mutual",
      email: "prakash.y@blizzard.com",
      phoneNumber: "+91 45690 01231",
    },
    {
      name: "Srikanth Nasika",
      about: "busy",
      mutual: "22 in Mutual",
      email: "prakash.y@blizzard.com",
      phoneNumber: "+91 45690 01231",
    },
  ];

  openConnectionModal() {
    this.modalRef = this.modalService.show(AddConnectionComponent, {
      class: "small-modal w-450",
    });
  }
}
