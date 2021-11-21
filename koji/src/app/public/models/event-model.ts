import { ConditionsModel } from "./conditions-model";

export interface EventModel {
    title:string;
    desceriptions?:string;
    conditions?:{user:string,condition:ConditionsModel}[];
    status:string
    creator:string;
    locationLink:string;
}
