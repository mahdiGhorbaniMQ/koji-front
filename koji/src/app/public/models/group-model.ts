import { EventModel } from "./event-model";

export interface GroupModel {
    name:string;
    users:string[];
    link:string,
    creator:string;
    events:EventModel[];
}
