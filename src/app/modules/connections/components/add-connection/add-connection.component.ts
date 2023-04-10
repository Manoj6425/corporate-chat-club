import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-connection',
  templateUrl: './add-connection.component.html'
})
export class AddConnectionComponent {
  constructor(public modalRef: BsModalRef){}

  connections = [
    {
      name: 'Sam Billings',
      about: '22 Mutual Clubs | 48 Mutual Contacts'
    },
    {
      name: 'Chase Gonzales',
      about: '22 Mutual Clubs | 48 Mutual Contacts'
    },
    {
      name: 'Raj',
      about: '22 Mutual Clubs | 48 Mutual Contacts'
    },
    {
      name: 'Barath',
      about: '22 Mutual Clubs | 48 Mutual Contacts'
    },
    {
      name: 'Garima',
      about: '22 Mutual Clubs | 48 Mutual Contacts'
    },
    {
      name: 'Sanjay',
      about: '22 Mutual Clubs | 48 Mutual Contacts'
    },
    {
      name: 'Dhanya Muktha',
      about: '22 Mutual Clubs | 48 Mutual Contacts'
    },
    {
      name: 'Arjun Suravaram',
      about: '22 Mutual Clubs | 48 Mutual Contacts'
    }
  ]
}
