export class ClubMessage {
    inputMessage:string;
    timeStamp:Date;
    senderId:string;

    constructor(inputMessage:string,timeStamp:Date,senderId:string)

    {
        this.senderId=senderId;
        this.timeStamp=timeStamp;
        this.inputMessage=inputMessage
        
    }
}