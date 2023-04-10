export class Request {
    id?: string;
    name : string;
    profileImageUrl : string;
    email : string;

    constructor(args : Request){
        this.id = args.id;
        this.name = args.name;
        this.profileImageUrl = args.profileImageUrl;
        this.email = args.email;
    }
}