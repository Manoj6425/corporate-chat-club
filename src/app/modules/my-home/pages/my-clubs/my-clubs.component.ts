import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubChatListItem } from 'src/app/shared/models';

import { ClubChatListService } from '../../services/club-chat-list.service';

@Component({
  selector: 'app-my-clubs',
  templateUrl: './my-clubs.component.html'
})
export class MyClubsComponent implements OnInit{

  searchChat:string='';
  userId:any;
  selectedChat:any;

  currentUserId: string = '123';
  currentUserName: string = 'Manoj Chowdary';
 constructor(private clubListService:ClubChatListService, private activatedRoute:ActivatedRoute){}
  
  groups:ClubChatListItem[] = [];

  ngOnInit(): void {
    this.clubListService.fetchClubList().subscribe((response) => {
      this.groups = response;
      this.clubListService.updateToObservable(response);
    });
  }

  removeUnseenMessageCount(item: ClubChatListItem){
  item.unReadMessageCount=0;
  }

}
