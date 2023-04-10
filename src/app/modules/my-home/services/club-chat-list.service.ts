import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ClubChatListItem, ClubRequest,Request, MessageStatus, Role, ThreadListItem, Participants, ClubDetails, Message, ChatUpdateLog, } from "src/app/shared/models";

import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ClubChatListService {

constructor(private http: HttpClient) { }

apiUrl = "https://643139a5d4518cfb0e5ce31c.mockapi.io";

clubListItem:ClubChatListItem[] = [];

apiclublist = new BehaviorSubject<ClubChatListItem[]>([]);
   

    updateToObservable(response: ClubChatListItem[]) {
        this.apiclublist.next(response);
    }

   

    // storeDataToArray(item: any) {
    //     item.id = this.clubListItem.length + 1;
    //     this.clubListItem.push(item);
    // }

    fetchClubList(): Observable<ClubChatListItem[]> {
        return this.http.get<ClubChatListItem[]>(this.apiUrl + "/clubListItem");
    }

    
    updateToFavorite(id:string,selectedChat:any){
      return this.http.put(this.apiUrl+`/clubListItem/${id}`,selectedChat);
    }
   


    

    pushData(data: ClubChatListItem): Observable<ClubChatListItem[]> {
        return this.http.post<ClubChatListItem[]>(this.apiUrl + "/clubListItem", data);
    }

    updateContactDetails(formValues: any, userId: any) {
        return this.http.put(this.apiUrl + `/clubListItem/${userId}`, formValues);
    }

    deleteData(id: any) {
        return this.http.delete(this.apiUrl + `/clubListItem/${id}`);
    }


// [
//   {id:"1",title:"Standard review club",iconUrl:",isFavourite:true,timeStamp:new Date(),unReadMessageCount:3,senderName:"manoj",body:"One piece da",clubId:",senderId:",receiverId:",status:0,attachments:[]},
//   {id:"2",title:"Sales review club",iconUrl:",isFavourite:true,timeStamp:new Date(),unReadMessageCount:4,senderName:"manoj",body:"Dragon ball z",clubId:",senderId:",receiverId:",status:0,attachments:[]},
//   {id:"3",title:"Marketing review club",iconUrl:",isFavourite:true,timeStamp:new Date(),unReadMessageCount:0,senderName:"manoj",body:"Naruto shippuden",clubId:",senderId:",receiverId:",status:0,attachments:[]},
//   {id:"4",title:"Product review club",iconUrl:",isFavourite:true,timeStamp:new Date(),unReadMessageCount:0,senderName:"manoj",body:"I don"t know you?",clubId:",senderId:",receiverId:",status:0,attachments:[]},
//   {id:"5",title:"Ux review club",iconUrl:",isFavourite:true,timeStamp:new Date(),unReadMessageCount:2,senderName:"manoj",body:"who are you?",clubId:",senderId:",receiverId:",status:0,attachments:[]},
//   {id:"6",title:"Marvel Fans club",iconUrl:",isFavourite:false,timeStamp:new Date(),unReadMessageCount:1,senderName:"manoj",body:"hi",clubId:",senderId:",receiverId:",status:0,attachments:[]},
//   {id:"7",title:"Anime Fans club",iconUrl:",isFavourite:false,timeStamp:new Date(),unReadMessageCount:0,senderName:"manoj",body:"hi bro",clubId:",senderId:",receiverId:",status:0,attachments:[]},
// ]

threadListItem:ThreadListItem[] = [
  {userId:"1",userName:"Rohith",iconUrl:"",isFavourite:true,timeStamp:new Date(),unReadMessageCount:3,senderName:"manoj",body:"One piece da",clubId:"",senderId:"",receiverId:"",status:0,attachments:[],isChatUpdateLog:false},
  {userId:"2",userName:"Sai",iconUrl:"",isFavourite:true,timeStamp:new Date(),unReadMessageCount:4,senderName:"manoj",body:"Dragon ball z",clubId:"",senderId:"",receiverId:"",status:0,attachments:[],isChatUpdateLog:false},
  {userId:"3",userName:"Pavan",iconUrl:"",isFavourite:true,timeStamp:new Date(),unReadMessageCount:0,senderName:"manoj",body:"Kakashi the copy ninja",clubId:"",senderId:"",receiverId:"",status:0,attachments:[],isChatUpdateLog:false},
  {userId:"4",userName:"Narendra",iconUrl:"",isFavourite:true,timeStamp:new Date(),unReadMessageCount:0,senderName:"manoj",body:"the ghost of Uchiha",clubId:"",senderId:"",receiverId:"",status:0,attachments:[],isChatUpdateLog:false},
  {userId:"5",userName:"Manoj",iconUrl:"",isFavourite:true,timeStamp:new Date(),unReadMessageCount:2,senderName:"manoj",body:"joy boy luffy",clubId:"",senderId:"",receiverId:"",status:0,attachments:[],isChatUpdateLog:false},
  {userId:"6",userName:"Sun God Nika",iconUrl:"",isFavourite:false,timeStamp:new Date(),unReadMessageCount:1,senderName:"manoj",body:"power to destroy the worlds",clubId:"",senderId:"",receiverId:"",status:0,attachments:[],isChatUpdateLog:false},
  {userId:"7",userName:"Pirate Hunter Zoro",iconUrl:"",isFavourite:false,timeStamp:new Date(),unReadMessageCount:0,senderName:"manoj",body:"minato yellow flash of leaf",clubId:"",senderId:"",receiverId:"",status:0,attachments:[],isChatUpdateLog:false},
]

clubInfoDetails:ClubDetails[]=[
  {id:"1",createdBy:"manoj",isUserMuted:false,title:"Standard review group",description:"It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout",visibility:0,type:0,admins:[],participants:[],createdOn:new Date()},
  {id:"2",createdBy:"rohith",isUserMuted:false,title:"Sales review group",description:"It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout",visibility:1,type:0,admins:[],participants:[],createdOn:new Date()},
  {id:"3",createdBy:"narendra",isUserMuted:false,title:"Marketing review group",description:"It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout",visibility:1,type:0,admins:[],participants:[],createdOn:new Date()},
  {id:"4",createdBy:"arvind",isUserMuted:false,title:"Product review group",description:"It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout",visibility:1,type:0,admins:[],participants:[],createdOn:new Date()},
  {id:"5",createdBy:"sai",isUserMuted:false,title:"Ux review group",description:"It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout",visibility:1,type:0,admins:[],participants:[],createdOn:new Date()},
  {id:"6",createdBy:"sai",isUserMuted:false,title:"Ux review group",description:"It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout",visibility:1,type:0,admins:[],participants:[],createdOn:new Date()},
  {id:"7",createdBy:"sai",isUserMuted:false,title:"Ux review group",description:"It is long established fact that a reader will be distracted by the readable content of a page when looking at its layout",visibility:1,type:0,admins:[],participants:[],createdOn:new Date()}
];

clubrequests:Request[] = [
  {id:"8",name:"revanth",email:"revanth@keka.com",profileImageUrl:""},
  {id:"9",name:"surya",email:"surya@keka.com",profileImageUrl:"",}
]

clubParticipents:Participants[]=[
  {request:{id:"1",name:"Manoj",email:"manoj@keka.com",profileImageUrl:""},status:1,role:0,isBlocked:false},
  {request:{id:"2",name:"Rohith",email:"Rohith@keka.com",profileImageUrl:""},status:0,role:1,isBlocked:false},
  {request:{id:"3",name:"Sai",email:"Sai@keka.com",profileImageUrl:""},status:1,role:0,isBlocked:false},
  {request:{id:"4",name:"Narendra",email:"Narendra@keka.com",profileImageUrl:""},status:1,role:0,isBlocked:false},
  {request:{id:"5",name:"Arvind",email:"Arvind@keka.com",profileImageUrl:""},status:0,role:0,isBlocked:false},
  {request:{id:"6",name:"Sandeep",email:"Sandeep@keka.com",profileImageUrl:""},status:0,role:0,isBlocked:true}
]

// messages:Message[]=[
  // {  "body": "hiii how are you", "timeStamp": 1680957752,"clubId":"","receiverId":"", "senderId": "12", "senderName": "vishnu", "iconUrl": "https://static.semrush.com/blog/uploads/media/43/b0/43b0b9a04c8a433a0c52360c9cc9aaf2/seo-guide-to-yoast-for-wordpress.svg", "status": 2, "attachments": [] },
    // {  "body": "i want to join the club", "timeStamp": 1680957692,"clubId":"","receiverId":"", "senderId": "123", "senderName": "vijay", "iconUrl": "https://static.semrush.com/blog/uploads/media/43/b0/43b0b9a04c8a433a0c52360c9cc9aaf2/seo-guide-to-yoast-for-wordpress.svg", "status": 2, "attachments": [] },
    // {  "body": "noooooooooooooooooooo", "timeStamp": 1680957632,"clubId":"","receiverId":"", "senderId": "1234", "senderName": "vikram", "iconUrl": "https://static.semrush.com/blog/uploads/media/43/b0/43b0b9a04c8a433a0c52360c9cc9aaf2/seo-guide-to-yoast-for-wordpress.svg", "status": 2, "attachments":[] },
    // {  "body": "hiii im good", "timeStamp": 1680957572,"clubId":"","receiverId":"", "senderId": "1234", "senderName": "vishal", "iconUrl": "https://static.semrush.com/blog/uploads/media/43/b0/43b0b9a04c8a433a0c52360c9cc9aaf2/seo-guide-to-yoast-for-wordpress.svg", "status": 2, "attachments": [] },
    // {  "body": "this is good group and i want to ", "timeStamp": 1680957512,"clubId":"","receiverId":"", "senderId": "12345", "senderName": "vikram", "iconUrl": "https://static.semrush.com/blog/uploads/media/43/b0/43b0b9a04c8a433a0c52360c9cc9aaf2/seo-guide-to-yoast-for-wordpress.svg", "status": 2, "attachments": [] },
    // {  "body": "hiii how are you", "timeStamp": 1680957452,"clubId":"","receiverId":"", "senderId": "123", "senderName": "vishwanath", "iconUrl": "https://static.semrush.com/blog/uploads/media/43/b0/43b0b9a04c8a433a0c52360c9cc9aaf2/seo-guide-to-yoast-for-wordpress.svg", "status": 2, "attachments": [] },
    // {  "body": "good group and i want to add ", "timeStamp": 1680957392,"clubId":"","receiverId":"", "senderId": "12", "senderName": "uzumaki naruto", "iconUrl": "https://static.semrush.com/blog/uploads/media/43/b0/43b0b9a04c8a433a0c52360c9cc9aaf2/seo-guide-to-yoast-for-wordpress.svg", "status": 2, "attachments": [] },
    // {  "body": "lorem1 epsum", "timeStamp": 1680957332, "senderId": "12","clubId":"","receiverId":"", "senderName": "itachi", "iconUrl": "https://static.semrush.com/blog/uploads/media/43/b0/43b0b9a04c8a433a0c52360c9cc9aaf2/seo-guide-to-yoast-for-wordpress.svg", "status": 2, "attachments": [] },
    // {  "body": "hi how are you", "timeStamp": 1680957272, "senderId": "123","clubId":"","receiverId":"", "senderName": "sasuke", "iconUrl": "https://static.semrush.com/blog/uploads/media/43/b0/43b0b9a04c8a433a0c52360c9cc9aaf2/seo-guide-to-yoast-for-wordpress.svg", "status": 2, "attachments": [] },
// ]

chatUpdateLogs:ChatUpdateLog[]=[];
  // {"id":"1","clubId":"","updatedBy":"wajid","body":"changed title by manoj","timeStamp": new Date("2023-04-05T10:48:26.748Z"),"isChatUpdatedLog":true},
  // {"id":"2","clubId":"","updatedBy":"wajid","body":"changed caption","timeStamp": new Date("2023-04-05T10:48:26.748Z"),"isChatUpdatedLog":true},
  // {"id":"3","clubId":"","updatedBy":"wajid","body":"changed username","timeStamp": new Date("2023-01-05T10:48:26.748Z"),"isChatUpdatedLog":true}


}