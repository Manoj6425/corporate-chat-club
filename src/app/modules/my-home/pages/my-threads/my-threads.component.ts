import { Component } from '@angular/core';
import { ThreadListItem } from 'src/app/shared/models';

import { ClubChatListService } from '../../services/club-chat-list.service';

@Component({
  selector: 'app-my-threads',
  templateUrl: './my-threads.component.html'
})
export class MyThreadsComponent {
  searchChat:string='';
  constructor(private clubChatService:ClubChatListService){}
  
  groups:any = this.clubChatService.threadListItem;

  removeUnseenMessageCount(item: ThreadListItem){
    item.unReadMessageCount=0;
    }
}
