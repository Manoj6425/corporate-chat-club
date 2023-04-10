import { Club } from "./clubs.model";

export interface ClubDetails extends Club {
    createdBy : string;
    isUserMuted : boolean;
}