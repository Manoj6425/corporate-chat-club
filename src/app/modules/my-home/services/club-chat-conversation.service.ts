import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { BehaviorSubject, Observable } from "rxjs";
import { ChatDetails, ChatUpdateLog, Message } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class ClubChatConversationService {

  constructor(private http: HttpClient) { }

  apiUrl = "https://643139a5d4518cfb0e5ce31c.mockapi.io";

  chatDetails:ChatDetails[]=[];

  messages:Message[]=[]
  chatUpdateLogs:ChatUpdateLog[]=[];

  apiclubChat = new  BehaviorSubject<ChatDetails[]>([]);

  updateToObservableChat(response: ChatDetails[]) {
    this.apiclubChat.next(response);
    // console.log(this.apiclubChat);
    
}

// updatechat(){
//   this.fetchClubchat().subscribe((data)=>{
//     this.apiclubChat.next(data);
//   })
// return this.apiclubChat.asObservable();
// }

fetchClubchat(): Observable<ChatDetails[]> {
  return this.http.get<ChatDetails[]>(this.apiUrl + "/clubChat");
}

}
