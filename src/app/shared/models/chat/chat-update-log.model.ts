export class ChatUpdateLog{
    id ?: string;
    clubId : string;
    updatedBy : string;
    body : string;
    timeStamp : Date;
    isChatUpdatedLog :boolean;

    constructor(args : ChatUpdateLog){
        this.clubId = args.clubId;
        this.updatedBy = args.updatedBy;
        this.body = args.body;
        this.timeStamp = args.timeStamp;
        this.isChatUpdatedLog = args.isChatUpdatedLog;
    }
}

