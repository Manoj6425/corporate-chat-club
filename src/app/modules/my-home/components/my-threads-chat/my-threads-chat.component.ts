import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatUpdateLog, Message } from 'src/app/shared/models';
import { ClubChatConversationService } from '../../services/club-chat-conversation.service';

import { ClubChatListService } from '../../services/club-chat-list.service';

@Component({
  selector: 'app-my-threads-chat',
  templateUrl: './my-threads-chat.component.html'
})
export class MyThreadsChatComponent {
  selectedChat: any;
  userId: any;
  clubChat: any;

  id!: string;
  // clubMessages!: any;
  clubDetails!: any;
  modalRef: any;
  currentUserId: string = '123';
  currentUserName: string = 'Manoj Chowdary';
  inputMessage!: string;

  waitingToConnect: boolean = true;
  requestedToConnect: boolean = true;

  merged:any[]=[];

  constructor(private activatedRoute: ActivatedRoute, private clublistService: ClubChatListService,private clubChatService: ClubChatConversationService,) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
      this.selectedChat = this.clublistService.threadListItem.find((u: any) => u.userId === this.userId);
    });
    this.sortMessages();
  }


  threadMessages: Message[] = this.clubChatService.messages;

  clubUpdateLogs:ChatUpdateLog[] = this.clublistService.chatUpdateLogs;


  addMessage() {
    let messageObj = new Message(
      {
        body: this.inputMessage,
        timeStamp: new Date(),
        senderId: this.currentUserId,
        senderName: this.currentUserName,
        receiverId: this.userId,
        clubId: '',
        iconUrl:'',
        status: 0,
        attachments: this.filesArray,
        isChatUpdateLog:false
      }
    );
    if(this.inputMessage.trim()!="" || this.filesArray.length!=0){
      this.threadMessages.push(messageObj);
    }
      this.inputMessage = '';
      this.filesArray = [];
  
      this.sortMessages();
  }


  sortMessages(){
    this.merged = [...this.threadMessages, ...this.clubUpdateLogs].sort((a,b) => {
      const dateA=new Date(b.timeStamp)
      const dateB = new Date(a.timeStamp)
      if (dateA > dateB) { return -1; } if (dateA < dateB) { return 1; } return 0;
    }); 
  }

  sendEmoji() {
    this.inputMessage = '\u{1F642}';
  }

  addToFavourites() {
    this.selectedChat.isFavourite = false;
  }

  filesArray :any= [];
  uploadFiles(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.filesArray.push(event.target.files[i].name);
    }
    console.log(this.filesArray);
  }

  removeFile(i:any){
     this.filesArray.splice(i,1);
  }

  // connect() {
  //   console.log("connected ");
  //   this.requestedToConnect = false;
  //   this.waitingToConnect = false;
  //   let messageObj = new Message({body:"you both now connected",timeStamp:new Date(), attachments:[],senderId:this.currentUserId,
  //   senderName: this.currentUserName,
  //   receiverId:this.userId, clubId:'',
  //   status:0,});

  //   this.clubMessages.push(messageObj);


  // }
  // block() {
  //   console.log("blocked");
  //   this.requestedToConnect = false;
  //   this.waitingToConnect = false;
  //   let messageObj = new Message({body:"you blocked "+this.clubMessages.displayName, timeStamp:new Date(), attachments:[],senderId:this.currentUserId,
  //   senderName: this.currentUserName,
  //   receiverId:this.userId, clubId:'',
  //   status:0,});
  //   this.clubMessages.push(messageObj);
  //   // this.clubMessages.contactStatus=0;
  //   console.log("thread details ",this.clubMessages);
  // }

}
