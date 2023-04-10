export interface Club {
    id:number,
    imgUrl:string,
    clubTitle:string,
    clubDescription:string,
    noOfMembers:number,
    clubCreatedBy:string,
    createdOn:string,
    isPrivate:boolean,
    isMember:boolean,
    isRequestSent?:boolean
}