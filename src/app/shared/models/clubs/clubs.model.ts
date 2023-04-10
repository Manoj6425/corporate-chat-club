import { ClubStatus, ClubType, VisibilityType } from "./clubs.enum";

export class Club {
    id ?: string;
    iconUrl ?: string;
    title : string;
    description :string;
    visibility : VisibilityType;
    type : ClubType;
    admins : Array<string>;
    participants ?: Array<string>;
    ownerId ?: string;
    createdOn : Date;
    status ?: ClubStatus;
    actionTakenBy ?: string;
    actionTakenOn ?: Date;
    reason ?: string;
    isMuted ?: boolean;
    isDeleted ?: boolean;

    constructor(args : Club) {
        this.iconUrl = args.iconUrl;
        this.title = args.title;
        this.description = args.description;
        this.ownerId = args.ownerId;       
        this.visibility = args.visibility;
        this.type = args.type;
        this.createdOn = args.createdOn;
        this.admins = args.admins;
        this.participants = args.participants;
        this.status = args.status;
        this.actionTakenBy = args.actionTakenBy;
        this.actionTakenOn = args.actionTakenOn;
        this.reason = args.reason;
        this.isMuted = args.isMuted;
        this.isDeleted = args.isDeleted;
    }
}