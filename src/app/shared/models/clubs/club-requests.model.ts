import { RequestStatus } from "./clubs.enum";

export class ClubRequest {
    id ?: string;
    clubId : string;
    userId : string;
    requestStatus : RequestStatus;
    actionTakenBy : string;
    actionTakenOn : string;

    constructor(args : ClubRequest){
        this.clubId = args.clubId;
        this.userId = args.userId;
        this.requestStatus = args.requestStatus;
        this.actionTakenBy = args.actionTakenBy;
        this.actionTakenOn = args.actionTakenOn;
    }
}