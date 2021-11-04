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
    testMap.set("سازنده",{placeName:[{title:"ملت",selected:false},{title:"بام",selected:false},{title:"قیطریه",selected:false},{title:"جمشیدیه",selected:false}],localDate:[{title:"شنبه",selected:false},{title:"یکشنبه",selected:false},{title:"دوشنبه",selected:false},{title:"سه شنبه",selected:false},{title:"جمعه",selected:false}],state:1})
    testMap.set("نهایی",{placeName:[{title:"شمال",selected:false}],localDate:[{title:"جمعه",selected:false}],state:1})
    testMap.set("حسن",{placeName:[{title:"شمال",selected:false}],localDate:[{title:"جمعه",selected:false}],state:1})
    testMap.set("ممد",{placeName:[{title:"جمشیدیه",selected:false}],localDate:[{title:"جمعه",selected:false}],state:1})
    testMap.set("شجریان",{placeName:[{title:"درکه",selected:false}],localDate:[{title:"جمعه",selected:false}],state:1})
    testMap.set("رضا پیشرو",{placeName:[{title:"ملت رو چمنا",selected:false}],localDate:[{title:"جمعه",selected:false}],state:1})
    this.groups=[
      {
        name:"ریچ کیدز",
        link:"",
        creator:"",
        events:[
          {title:"شمال تو پنت هاوس",desceriptions:"بریم عشق و حال",status:"",creator:"",locationLink:"",conditions:testMap,finalConditions:{localDate:[{title:"جمعه",selected:false}],placeName:[{title:"چمنای ملت",selected:false}],state:1}},
          {title:"ترکیه",status:"",desceriptions:"بریم عشق و حال",creator:"",locationLink:"",conditions:testMap,finalConditions:{localDate:[{title:"جمعه",selected:false}],placeName:[{title:"چمنای ملت",selected:false}],state:1}},
          {title:"تورنتو",status:"",desceriptions:"بریم عشق و حال",creator:"",locationLink:"",conditions:testMap,finalConditions:{localDate:[{title:"جمعه",selected:false}],placeName:[{title:"چمنای ملت",selected:false}],state:1}}
        ],
        users:[],
      },
      {
        name:"همه",
        link:"",
        creator:"",
        events:[
          {title:"خیابون",desceriptions:"بریم کف خیابونا",status:"",creator:"",locationLink:"",conditions:testMap,finalConditions:{localDate:[{title:"جمعه",selected:false}],placeName:[{title:"چمنای ملت",selected:false}],state:1}},
          {title:"باغ وحش",desceriptions:"بریم عشق و حال",status:"",creator:"",locationLink:"",conditions:testMap,finalConditions:{localDate:[{title:"جمعه",selected:false}],placeName:[{title:"چمنای ملت",selected:false}],state:1}},
          {title:"باغ اهل",desceriptions:"بریم عشق و حال",status:"",creator:"",locationLink:"",conditions:testMap,finalConditions:{localDate:[{title:"جمعه",selected:false}],placeName:[{title:"چمنای ملت",selected:false}],state:1}}
        ],
        users:[],
      },
      {
        name:"تباه ها",
        link:"",
        creator:"",
        events:[
          {title:"چمنای پارک ملت",desceriptions:"بریم عشق و حال",status:"",creator:"",locationLink:"",conditions:testMap,finalConditions:{localDate:[{title:"جمعه",selected:false}],placeName:[{title:"چمنای ملت",selected:false}],state:1}},
          {title:"پله های جمشیدیه",desceriptions:"بریم عشق و حال",status:"",creator:"",locationLink:"",conditions:testMap,finalConditions:{localDate:[{title:"جمعه",selected:false}],placeName:[{title:"چمنای ملت",selected:false}],state:1}},
          {title:"زیرزمین دانشگاه",desceriptions:"بریم عشق و حال",status:"",creator:"",locationLink:"",conditions:testMap,finalConditions:{localDate:[{title:"جمعه",selected:false}],placeName:[{title:"چمنای ملت",selected:false}],state:1}}
        ],
        users:[],
      },
    ]
  }
}
