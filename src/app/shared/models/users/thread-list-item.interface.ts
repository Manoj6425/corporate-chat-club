import { ChatListItem } from "../chat";

export interface ThreadListItem extends ChatListItem {
    userId : string;
    userName : string;
    iconUrl : string;
}