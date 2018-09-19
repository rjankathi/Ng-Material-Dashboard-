import { Binary } from "@angular/compiler";
//import { createInterface } from "readline";

export interface KeyValuePair{
    id:number;
    name:string;
}
export interface Comment {
    id:number;
    commentText:string;
    tSheetId: number;
    createdDate:any;
    createdBy:string;
    duration:number;
}
 
export interface User {
    id:number;
    networkId: string;
    firstName:string;
    lastName:string;
    phone:string;
    email:string;
    disabled:boolean;
    title:string;
    createdBy:number;
    createdDate:any;
    modifiedBy:number;
    modifiedDate:any;
}

export interface Client {
    id:number;
    clientName:string;
    createdBy:number;
    createdDate:any;
    modifiedBy:number;
    modifiedDate:any;
    disabled:boolean;
}

export interface Project {
    id:number;
    description:string;
    createdBy:number;
    createdDate:any;
    modifiedBy:number;
    modifiedDate:any;
}

export interface DueSheetData{
    id: number;
    reason: string;
    tSheetId:string;
    status:string;
    payPeriod:string,
    endClient:string,
    totalHoursMissing:number;
    createdBy:number;
    createdDate:any;
    modifiedBy:number;
    modifiedDate:any;
} 

export interface TSheet{
    // id:number;
    // clientId:number;
    // from:Date;
    // to:Date;
    // totalhours:number;
    // billablehours:number;
    // status:string;
    // attachmentId:number;
    // submittedOn:any;
    // actions:string;
    // lastUpdated: string;
    id:number;
    clientId:number;
    from:Date;
    to:Date;
    totalhours:number;
    billablehours:number;
    status:string;
    attachmentId:number;
    actions:string;
    createdBy:number;
    createdDate:any;
    modifiedBy:number;
    modifiedDate:any;
}

export interface Apporval{
    id:number;
    tSheetId:number;
    taskCompleted:any;
    taskStarted:any;
    taskStatus:string;
    initiatedBy:string;
    approvalType:string;
    approverId:number;
    approvalRequired:boolean;
    sequence:number;
    createdBy:number;
    createdDate:any;
    modifiedBy:number;
    modifiedDate:any;
}

export interface Admin {
    id:number;
    tSheetId:number;
    clientId:number;
    profileId:number;
    createdBy:number;
    createdDate:any;
    modifiedBy:number;
    modifiedDate:any;
}

// Email subject & body templates
export interface AppSettings {
    id:number;
    key:string;
    value:string;
    createdBy:number;
    createdDate:any;
    modifiedBy:number;
    modifiedDate:any;
}

export interface AttachmentData {
    attachmentId: number;
    data:Binary
}

export interface Attachment {
    id: number;
    tSheetId: number;
    description:string;
    uploadedBy: number;
    fileName: string;
    size: number;
    createdBy: number;
    createdDate: any;
    tempKey: string;
}

export interface EmailLogs {
    id:number;
    tSheetId:number;
    userId: number;
    userName : string;
    email: string;
    subject: string;
    body: string;
    createdOn: any;
    sentStatus : boolean;
}

export interface ProjectLocation {
    id: number;
    name: string;
    disabled: boolean;
    clientId : number;
    createdBy:number;
    createdDate:any;
    modifiedBy:number;
    modifiedDate:any;
}

export interface UserRole {
    role: string;
    id: number;
    createdBy:number;
    createdDate:any;
    modifiedBy:number;
    modifiedDate:any;
    profileId: number;
}

export interface Vendor {
    id : number;
    name : string;
    disabled : boolean;
    createdBy:number;
    createdDate:any;
    modifiedBy:number;
    modifiedDate:any;
}
