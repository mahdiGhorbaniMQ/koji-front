
export interface EventModel {
    title:string;
    descriptions?:String;
    dates:String[];
    places:String[];
    owner:String;
    finalPlace?:String;
    finalDate?:String;
    agreements?:{username:String,firstName:string,lastName:String}[];
    disagreements?:{username:String,firstName:string,lastName:String}[];
    id:String;
}
