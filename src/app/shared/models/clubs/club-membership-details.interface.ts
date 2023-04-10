export interface ClubMembershipDetails {
    id : string;
    iconUrl : string;
    tile : string;
    description : string;
    createdBy : string;
    createdOn : Date;
    membersCount : number;
    isJoined : boolean;
    isRequested : boolean;
}