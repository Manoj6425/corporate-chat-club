import { MessageStatus } from "./chat.enum";

export class Message{
    id ?: string;
    body : string;
    timeStamp : Date;
    clubId : string;
    senderId : string;
    senderName: string;
    receiverId : String;
    iconUrl:string;
    status : MessageStatus;
    attachments : Array<string>;
    isChatUpdateLog:boolean
    constructor(args : Message){
        this.body = args.body;
        this.timeStamp = args.timeStamp;
        this.senderName = args.senderName;
        this.clubId = args.clubId;
        this.senderId = args.senderId;
        this.receiverId = args.receiverId;
        this.iconUrl = args.iconUrl;
        this.status = args.status;
        this.attachments = args.attachments;
        this.isChatUpdateLog = args.isChatUpdateLog;
    }

}


