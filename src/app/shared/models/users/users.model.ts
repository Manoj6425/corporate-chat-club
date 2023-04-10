import { Role, UserStatus } from "./users.enum";

export class Users {
    id ?: string;
    firstName : string;
    middleName : string;
    lastName :string;
    displayName :string;
    phone : string;
    email : string;
    status : UserStatus;
    taggedClubs : Array<string>;
    addedBy : string;
    addedOn : Date;
    role : Role;
    actionTakenBy ?: string;
    actionTakenOn ?:Date;
    reason ?: string;
    isDeleted ?: boolean;

    constructor(args : Users){
        this.firstName = args.firstName;
        this.middleName = args.middleName;
        this.lastName = args.lastName;
        this.displayName = args.displayName;
        this.phone = args.phone;
        this.email = args.email;
        this.status = args.status;
        this.taggedClubs = args.taggedClubs;
        this.addedBy = args.addedBy;
        this.addedOn = args.addedOn;
        this.role = args.role;
        this.actionTakenBy = args.actionTakenBy;
        this.actionTakenOn = args.actionTakenOn;
        this.reason = args.reason;
        this.isDeleted = args.isDeleted;
    }
}