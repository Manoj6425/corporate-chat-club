import { Users } from "./users.model";

export interface UserClubInformation extends Users {
    addedByUserName : string;
    activeClubsCount : number;
}