import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClubChatListService } from '../../services/club-chat-list.service';
import { LeaveClubComponent } from 'src/app/modules/clubs/components/leave-club/leave-club.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DeactivateClubComponent } from 'src/app/modules/clubs/components/deactivate-club/deactivate-club.component';
import { FormControl, FormGroup } from '@angular/forms';
import { Participants } from 'src/app/shared/models';
import { Request } from 'src/app/shared/models';

@Component({
  selector: 'app-club-group-info',
  templateUrl: './club-group-info.component.html'
})
export class ClubGroupInfoComponent {

  selectedChat: any;
  userId: any;
  clubChat:any;
  myform!:FormGroup;

  searchParticipants:string='';
  modelRef:any;

  noOfUsersSelected:number = 0;
  constructor(private activatedRoute:ActivatedRoute,private clublistService:ClubChatListService,private modalService:BsModalService){
    this.myform = new FormGroup({
      isPublic: new FormControl(),
      clubStatus: new FormControl(),
  });
  }
  
  groups:any = this.clublistService.clubParticipents;
  requests:any = this.clublistService.clubrequests

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      this.userId = this.activatedRoute.snapshot.paramMap.get('id');
      this.selectedChat = this.clublistService.clubInfoDetails.find((u:any) => u.id === this.userId);
    });
    // console.log(this.selectedChat);
  }

  blockUser(item:Participants){
    item.isBlocked=true;
    item.status = 0;
  }

  selectedUsersArray:string[]=[];
  usersSelected(id:any){

    if(this.selectedUsersArray.includes(id)){
      let index = this.selectedUsersArray.indexOf(id);
      if (index !== -1) {
        this.selectedUsersArray.splice(index, 1);
      }
       this.noOfUsersSelected--; 
    }
    else{  
    this.noOfUsersSelected++
    this.selectedUsersArray.push(id);
    }
  }


  addRequest(id:string){
    let request:Request = this.requests.find((obj: Participants) => obj.request.id == id);
    this.groups.push(new Participants({request:{profileImageUrl:request.profileImageUrl ,name:request.name , email:request.email},status:1,role:0,isBlocked:false}));
    this.requests = this.requests.filter((obj:Request) => obj.id !== id); 
  }

  deleteRequest(id:string){
    this.requests = this.requests.filter((obj:Request) => obj.id !== id);
  }

  openLeaveModel(){
    this.modelRef = this.modalService.show(LeaveClubComponent , {class: 'small-modal',initialState:{selectedChatTitle:this.selectedChat.title}})
  }

  openDeactivateModel() {
    this.modelRef = this.modalService.show(DeactivateClubComponent, { class: 'small-modal' ,initialState:{selectedChatTitle:this.selectedChat.title}})
  }
}
