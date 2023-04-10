import { Message } from "./message.model";

export interface ChatListItem extends Message{
    isFavourite : boolean;
    unReadMessageCount : number;
}
