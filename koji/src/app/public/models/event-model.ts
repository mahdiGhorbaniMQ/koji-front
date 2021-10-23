import { ConditionsModel } from "./conditions-model";

export interface EventModel {
    title:string;
    desceriptions?:string;
    conditions?:Map<string,ConditionsModel>;
    finalConditions?:ConditionsModel;
    status:string
    creator:string;
    locationLink:string;
}
