import { BloodGroup, Gender, MaritalStatus } from "./users.enum";
import { Users } from "./users.model";

export class UserDetails extends Users {
    profileImageUrl : string;
    gender : Gender;
    dob : Date;
    bloodGroup : BloodGroup;
    martialStatus : MaritalStatus;
    about : string;
    address : string;
    professionalSummary : string;

    constructor(args : UserDetails){
        super(args);
        this.profileImageUrl = args.profileImageUrl;
        this.gender = args.gender;
        this.dob = args.dob;
        this.bloodGroup = args.bloodGroup;
        this.martialStatus = args.martialStatus;
        this.about = args.about;
        this.address =args.address;
        this.professionalSummary = args.professionalSummary;
    }
}