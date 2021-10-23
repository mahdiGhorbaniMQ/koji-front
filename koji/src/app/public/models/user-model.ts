import { GroupModel } from "./group-model";

export interface UserModel {
    email:string;
    name:string;
    password:string
    groups:GroupModel[];
}
