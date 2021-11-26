import { EventModel } from "./event-model";

export interface GroupModel {
    name:string;
    bio?:string;
    users:{name:string,email:string}[];
    link:string,
    creator?:string;
    events?:EventModel[];
    id:string
}
