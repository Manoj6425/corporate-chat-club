import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { LeaveClubComponent } from 'src/app/modules/clubs/components/leave-club/leave-club.component';
import { MuteClubComponent } from 'src/app/modules/clubs/components/mute-club/mute-club.component';
import { ChatDetails, ChatUpdateLog, Message } from 'src/app/shared/models';
import { ClubChatConversationService } from '../../services/club-chat-conversation.service';
import { ClubChatListService } from '../../services/club-chat-list.service';


@Component({
  selector: 'app-my-clubs-chat',
  templateUrl: './my-clubs-chat.component.html',
})
export class MyClubsChatComponent implements OnInit {
  selectedChat: any;
  userId: any;
  clubChat: any;


  id!: string;
  clubDetails!: any;
  modalRef: any;
  currentUserId: string = '123';
  currentUserName: string = 'Manoj Chowdary';
  inputMessage: string="";
  messageId!:string;

  modelRef:any;

  isClubFavourite = "";

  merged:any[]=[];
  constructor(private activatedRoute: ActivatedRoute,private clublistService: ClubChatListService,private clubChatService: ClubChatConversationService,private modalService:BsModalService) { }
  
clubChatDetails: ChatDetails[]=[];
  
  ngOnInit(): void {

    this.clubChatService.fetchClubchat().subscribe((response) => {
      this.clubChatService.updateToObservableChat(response);
      this.clubChatDetails = response;
      this.sortMessages();
    });

    this.activatedRoute.paramMap.subscribe(() => {
      this.userId = this.activatedRoute.snapshot.paramMap.get('id');
      this.clublistService.apiclublist.subscribe((response) => {
      this.selectedChat = response.find(
        (u: any) => u.id === this.userId
        );
        this.selectedChat.isFavourite == true ? this.isClubFavourite = "Mark as Favourite" :"UnMark as Favourite";
      });
    });

  }

  addMessage() {
    let messageObj = new Message(
      { body:this.inputMessage,
        timeStamp:new Date(),
        senderId:this.currentUserId,
        senderName: this.currentUserName,
        receiverId:'',
        clubId:this.userId,
        iconUrl:'',
        status:0,
        attachments:this.filesArray
        ,isChatUpdateLog:false
      }
    );

    if(this.inputMessage.trim()!="" || this.filesArray.length!=0){
    this.clubChatDetails[0].messages.push(messageObj);
  }
    this.inputMessage = '';
    this.filesArray = [];

    this.sortMessages();
  }
  
  sortMessages(){
    this.merged = [...this.clubChatDetails[0].messages, ...this.clubChatDetails[0].chatUpdateLogs].sort((a,b) => {
      const dateA=new Date(b.timeStamp)
      const dateB = new Date(a.timeStamp)
      if (dateA > dateB) { return -1; } if (dateA < dateB) { return 1; } return 0;
    });     
  }
  
  sendEmoji(){
    this.inputMessage='\u{1F642}';
  }

  addTOFavourites(){
    // this.selectedChat.isFavourite=false;
    if(this.isClubFavourite=="Mark as Favourite"){
      this.isClubFavourite = "Unmark from favourites"
    }else{
      this.isClubFavourite = "Mark as Favourite";
    }
    this.selectedChat.isFavourite=!this.selectedChat.isFavourite;
    this.clublistService.updateToFavorite(this.userId,this.selectedChat).subscribe(()=>{
      this.clublistService.fetchClubList().subscribe((response) => {
    });
  })
}
  
  filesArray :any= [];
  uploadFiles(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      if (event.target.files.length<6){
      this.filesArray.push(event.target.files[i].name);
      }
    }
  }

  removeFile(i:any){
     this.filesArray.splice(i,1);
  }
 
  openLeaveModel(){
    this.modelRef = this.modalService.show(LeaveClubComponent , {class: 'small-modal',initialState:{selectedChatTitle:this.selectedChat.title}})
  }

  openMuteModel(){
    this.modelRef = this.modalService.show(MuteClubComponent , {class: 'small-modal',initialState:{selectedChatTitle:this.selectedChat.title}})
  }
}
