import { EventModel } from "./event-model";

export interface GroupModel {
    name:string;
    bio?:string;
    users:string[];
    link?:string,
    owner:string;
    events:String[];
    id:string;
}
