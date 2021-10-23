import { Injectable } from '@angular/core';
import { ConditionsModel } from '../models/conditions-model';
import { GroupModel } from '../models/group-model';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  userData:UserModel={name:"مهدی",email:"",password:"",groups:[]};
  groups:GroupModel[]=[]
  constructor() {
    var testMap=new Map<string,ConditionsModel>();
    testMap.set("حسن",{placeName:["شمال"],localDate:["حمعه"],state:1})
    testMap.set("ممد",{placeName:["جمشیدیه"],localDate:["جمعه"],state:1})
    testMap.set("شجریان",{placeName:["درکه"],localDate:["جمعه"],state:1})
    testMap.set("رضا پیشرو",{placeName:["ملت رو چمنا"],localDate:["جمعه"],state:1})
    this.groups=[
      {
        name:"ریچ کیدز",
        link:"",
        creator:"",
        events:[
          {title:"شمال تو پنت هاوس",desceriptions:"بریم عشق و حال",status:"",creator:"",locationLink:"",conditions:testMap,finalConditions:{localDate:["جمعه"],placeName:["چمنای ملت"],state:1}},
          {title:"ترکیه",status:"",desceriptions:"بریم عشق و حال",creator:"",locationLink:"",conditions:testMap,finalConditions:{localDate:["جمعه"],placeName:["چمنای ملت"],state:1}},
          {title:"تورنتو",status:"",desceriptions:"بریم عشق و حال",creator:"",locationLink:"",conditions:testMap,finalConditions:{localDate:["جمعه"],placeName:["چمنای ملت"],state:1}}
        ],
        users:[],
      },
      {
        name:"همه",
        link:"",
        creator:"",
        events:[
          {title:"خیابون",desceriptions:"بریم کف خیابونا",status:"",creator:"",locationLink:"",conditions:testMap,finalConditions:{localDate:["جمعه"],placeName:["چمنای ملت"],state:1}},
          {title:"باغ وحش",desceriptions:"بریم عشق و حال",status:"",creator:"",locationLink:"",conditions:testMap,finalConditions:{localDate:["جمعه"],placeName:["چمنای ملت"],state:1}},
          {title:"باغ اهل",desceriptions:"بریم عشق و حال",status:"",creator:"",locationLink:"",conditions:testMap,finalConditions:{localDate:["جمعه"],placeName:["چمنای ملت"],state:1}}
        ],
        users:[],
      },
      {
        name:"تباه ها",
        link:"",
        creator:"",
        events:[
          {title:"چمنای پارک ملت",desceriptions:"بریم عشق و حال",status:"",creator:"",locationLink:"",conditions:testMap,finalConditions:{localDate:["جمعه"],placeName:["چمنای ملت"],state:1}},
          {title:"پله های جمشیدیه",desceriptions:"بریم عشق و حال",status:"",creator:"",locationLink:"",conditions:testMap,finalConditions:{localDate:["جمعه"],placeName:["چمنای ملت"],state:1}},
          {title:"زیرزمین دانشگاه",desceriptions:"بریم عشق و حال",status:"",creator:"",locationLink:"",conditions:testMap,finalConditions:{localDate:["جمعه"],placeName:["چمنای ملت"],state:1}}
        ],
        users:[],
      },
    ]
  }
}
