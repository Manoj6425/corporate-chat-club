import { ClubType, VisibilityType } from "./clubs.enum";

export class AddClubInputs {
    id ?: string;
    iconUrl : string;
    title : string;
    description :string;
    visibility : VisibilityType;
    type : ClubType;
    admins : Array<string>;
    participants : Array<string>;
    ownerId : string;
    createdOn : Date;
    
    constructor(args : AddClubInputs) {
        this.iconUrl = args.iconUrl;
        this.title = args.title;
        this.description = args.description;
        this.ownerId = args.ownerId;       
        this.visibility = args.visibility;
        this.type = args.type;
        this.createdOn = args.createdOn;
        this.admins = args.admins;
        this.participants = args.participants;
    }
}