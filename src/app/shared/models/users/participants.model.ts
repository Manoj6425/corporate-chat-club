import { Role, UserStatus } from "./users.enum";
import { Request } from ".";

export class Participants {
    // id?:string;
    // name:string;
    // email:string;
    // profileImageUrl:string;
    request: Request;
    status : UserStatus;
    role : Role;
    isBlocked : boolean;

    constructor(args:Participants){
        // this.id = args.id;
        // this.name = args.name;
        // this.email = args.email;
        // this.profileImageUrl = args.profileImageUrl;
        this.request = args.request;
        this.status = args.status;
        this.role = args.role;
        this.isBlocked = args.isBlocked;
    }
}