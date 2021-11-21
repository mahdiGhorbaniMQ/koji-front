import { Injectable } from '@angular/core';
import { ConditionsModel } from '../models/conditions-model';
import { EventModel } from '../models/event-model';
import { GroupModel } from '../models/group-model';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  userData:UserModel={name:"مهدی",email:"",password:"",groups:[]};
  groups:GroupModel[]=[];


  events:EventModel[]=[
    {
      title:"اخر هفته درکه",
      desceriptions:"درکه قطعیه فقط روزشو انتخاب کنید",
      status:"",creator:"",locationLink:"",
      conditions:[
        {
          user:"creator",
          condition:{
            localDate:[
              {title:"پنج شنبه صب"},
              {title:"پنج شنبه عصر"},
              {title:"جمعه صب"},
              {title:"جمعه عصر"},
            ],
          }
        },
        {
          user:"final",
          condition:{
            localDate:[
              {title:"پنج شنبه صب"}
            ],
            placeName:[
              {title:"درکه"}
            ]
          }
        },
        {
          user:"mehty",
          condition:{
            localDate:[
              {title:"پنج شنبه صب",selected:true},
              {title:"پنج شنبه عصر",selected:true},
              {title:"جمعه صب",selected:true},
              {title:"جمعه عصر",selected:false},
            ],
            state:1
          }
        },
        {
          user:"Qmars",
          condition:{
            localDate:[
              {title:"پنج شنبه صب",selected:false},
              {title:"پنج شنبه عصر",selected:false},
              {title:"جمعه صب",selected:false},
              {title:"جمعه عصر",selected:true},
            ],
            state:1
          }
        },
        {
          user:"qolamHosein",
          condition:{
            localDate:[
              {title:"پنج شنبه صب",selected:false},
              {title:"پنج شنبه عصر",selected:true},
              {title:"جمعه صب",selected:false},
              {title:"جمعه عصر",selected:true},
            ],
            state:1
          }
        },
        {
          user:"کیانوش",
          condition:{
            localDate:[
              {title:"پنج شنبه صب",selected:false},
              {title:"پنج شنبه عصر",selected:false},
              {title:"جمعه صب",selected:false},
              {title:"جمعه عصر",selected:false},
            ],
            state:1
          }
        },
        {
          user:"شهرام",
          condition:{
            localDate:[
              {title:"پنج شنبه صب",selected:true},
              {title:"پنج شنبه عصر",selected:true},
              {title:"جمعه صب",selected:true},
              {title:"جمعه عصر",selected:true},
            ],
            state:1
          }
        },
        {
          user:"ممد",
          condition:{
            localDate:[
              {title:"پنج شنبه صب",selected:false},
              {title:"پنج شنبه عصر",selected:true},
              {title:"جمعه صب",selected:true},
              {title:"جمعه عصر",selected:true},
            ],
            state:1
          }
        },
      ],
    },
    {
      title:"این هفته چیکاره اید",
      status:"",
      desceriptions:"جمع بشید بریم بیرون پوسیدیم",
      creator:"",
      locationLink:"",
      conditions:[
        {
          user:"creator",
          condition:{
            localDate:[
              {title:"جمعه ساعت 10 صبح"},
              {title:"جمعه ساعت 8 صبح"},
              {title:"پنج شنبه 4 عصر"},
              {title:"پنج شنبه 6 صبح"},
              {title:"دو شنبه ساعت 12 ظهر"},
              {title:"دو شنبه ساعت 5 عصر"},
            ],
            placeName:[
              {title:"پارک ملت"},
              {title:"باغ کتاب"},
              {title:"سرخه حصار"},
              {title:"فکر کده"},
              {title:"پینت بال"},
              {title:"جمشیدیه"},
              {title:"پارک ارم"},
              {title:"شیان"},
            ]
          },
        },
        {
          user:"final",
          condition:{
            localDate:[
              {title:"جمعه ساعت 10 صبح"}
            ],
            placeName:[
              {title:"شیان"}
            ]
          }
        },
        {
          user:"مهدی",
          condition:{
            localDate:[
              {title:"جمعه ساعت 10 صبح",selected:true},
              {title:"جمعه ساعت 8 صبح",selected:true},
              {title:"پنج شنبه 4 عصر",selected:false},
              {title:"پنج شنبه 6 صبح",selected:true},
              {title:"دو شنبه ساعت 12 ظهر",selected:false},
              {title:"دو شنبه ساعت 5 عصر",selected:true},
            ],
            placeName:[
              {title:"پارک ملت",selected:true},
              {title:"باغ کتاب",selected:true},
              {title:"سرخه حصار",selected:true},
              {title:"فکر کده",selected:true},
              {title:"پینت بال",selected:true},
              {title:"جمشیدیه",selected:false},
              {title:"پارک ارم",selected:true},
              {title:"شیان",selected:true},
            ],
            state:1
          },
        },
        {
          user:"حصین",
          condition:{
            localDate:[
              {title:"جمعه ساعت 10 صبح",selected:false},
              {title:"جمعه ساعت 8 صبح",selected:false},
              {title:"پنج شنبه 4 عصر",selected:true},
              {title:"پنج شنبه 6 صبح",selected:false},
              {title:"دو شنبه ساعت 12 ظهر",selected:false},
              {title:"دو شنبه ساعت 5 عصر",selected:true},
            ],
            placeName:[
              {title:"پارک ملت",selected:true},
              {title:"باغ کتاب",selected:true},
              {title:"سرخه حصار",selected:true},
              {title:"فکر کده",selected:true},
              {title:"پینت بال",selected:false},
              {title:"جمشیدیه",selected:true},
              {title:"پارک ارم",selected:false},
              {title:"شیان",selected:true},
            ],
            state:1
          },
        },
        {
          user:"aboli",
          condition:{
            state:2
          },
        },
        {
          user:"عبدل",
          condition:{
            state:3
          },
        }
      ]
    },
    {
      title:"جنگل",
      status:"",
      desceriptions:"هستید بریم جنگلی جایی چند شب بمونیم",
      creator:"",
      locationLink:"",
      conditions:[
        {
          user:"creator",
          condition:{
            localDate:[
              {title:"همین هفته"},
              {title:"هفته دیگه"},
              {title:"بزاریم چند هفته دیگه تعطیلاته اون موقع"},
              {title:"اخر ماه"},
              {title:"اخر سال"},
            ],
            placeName:[
              {title:"جنگلای شمال"},
              {title:"جنگلای تهران"},
              {title:"اطراف تهران"},
              {title:"بریم جنوب کشور"},
            ]
          }
        },
        {
          user:"final",
          condition:{
            localDate:[
              {title:"همین هفته"}
            ],
            placeName:[
              {title:"جنگلای تهران"}
            ]
          }
        },
        {
          user:"mehty",
          condition:{
            localDate:[
              {title:"همین هفته",selected:true},
              {title:"هفته دیگه",selected:false},
              {title:"بزاریم چند هفته دیگه تعطیلاته اون موقع",selected:true},
              {title:"اخر ماه",selected:false},
              {title:"اخر سال",selected:true},
            ],
            placeName:[
              {title:"جنگلای شمال",selected:true},
              {title:"جنگلای تهران",selected:true},
              {title:"اطراف تهران",selected:true},
              {title:"بریم جنوب کشور",selected:true},
            ],
            state:1
          }
        },
        {
          user:"aboli",
          condition:{
            localDate:[
              {title:"همین هفته",selected:true},
              {title:"هفته دیگه",selected:false},
              {title:"بزاریم چند هفته دیگه تعطیلاته اون موقع",selected:false},
              {title:"اخر ماه",selected:true},
              {title:"اخر سال",selected:false},
            ],
            placeName:[
              {title:"جنگلای شمال",selected:true},
              {title:"جنگلای تهران",selected:false},
              {title:"اطراف تهران",selected:false},
              {title:"بریم جنوب کشور",selected:false},
            ],
            state:1
          }
        },
        {
          user:"حسن",
          condition:{
            localDate:[
              {title:"همین هفته",selected:true},
              {title:"هفته دیگه",selected:true},
              {title:"بزاریم چند هفته دیگه تعطیلاته اون موقع",selected:true},
              {title:"اخر ماه",selected:true},
              {title:"اخر سال",selected:true},
            ],
            placeName:[
              {title:"جنگلای شمال",selected:false},
              {title:"جنگلای تهران",selected:false},
              {title:"اطراف تهران",selected:false},
              {title:"بریم جنوب کشور",selected:true},
            ],
            state:1
          }
        },
        {
          user:"محمد نادر",
          condition:{
            localDate:[
              {title:"همین هفته",selected:true},
              {title:"هفته دیگه",selected:true},
              {title:"بزاریم چند هفته دیگه تعطیلاته اون موقع",selected:true},
              {title:"اخر ماه",selected:false},
              {title:"اخر سال",selected:false},
            ],
            placeName:[
              {title:"جنگلای شمال",selected:false},
              {title:"جنگلای تهران",selected:false},
              {title:"اطراف تهران",selected:true},
              {title:"بریم جنوب کشور",selected:true},
            ],
            state:1
          }
        },
        {
          user:"علی",
          condition:{
            localDate:[
              {title:"همین هفته",selected:true},
              {title:"هفته دیگه",selected:true},
              {title:"بزاریم چند هفته دیگه تعطیلاته اون موقع",selected:true},
              {title:"اخر ماه",selected:true},
              {title:"اخر سال",selected:true},
            ],
            placeName:[
              {title:"جنگلای شمال",selected:false},
              {title:"جنگلای تهران",selected:false},
              {title:"اطراف تهران",selected:true},
              {title:"بریم جنوب کشور",selected:true},
            ],
            state:1
          }
        },
        {
          user:"کیمیا",
          condition:{
            localDate:[
              {title:"همین هفته",selected:true},
              {title:"هفته دیگه",selected:true},
              {title:"بزاریم چند هفته دیگه تعطیلاته اون موقع",selected:true},
              {title:"اخر ماه",selected:true},
              {title:"اخر سال",selected:true},
            ],
            placeName:[
              {title:"جنگلای شمال",selected:true},
              {title:"جنگلای تهران",selected:false},
              {title:"اطراف تهران",selected:false},
              {title:"بریم جنوب کشور",selected:false},
            ],
            state:1
          }
        },
        {
          user:"shiva",
          condition:{
            state:2
          }
        },
        {
          user:"navid",
          condition:{
            state:3
          }
        },
        {
          user:"AmirAli",
          condition:{
            state:3
          }
        },
        {
          user:"mohammad",
          condition:{
            state:2
          }
        }
      ]
    },
    {
      title:"اطراف شهر",
      status:"",
      desceriptions:"بریم چند روز بمونیم",
      creator:"",
      locationLink:"",
      conditions:[
        {
          user:"creator",
          condition:{
            localDate:[
              {title:"همین هفته"},
              {title:"هفته دیگه"},
              {title:"بزاریم چند هفته دیگه تعطیلاته اون موقع"},
              {title:"اخر ماه"},
              {title:"اخر سال"},
            ],
            placeName:[
              {title:"شمال تهران"},
              {title:"شرق تهران"},
              {title:"غرب تهران"},
              {title:"شمال تهران"},
            ],
            state:1
          }
        },
        {
          user:"final",
          condition:{
            localDate:[
              {title:"اخر ماه"}
            ],
            placeName:[
              {title:"شمال تهران"}
            ]
          }
        },
        {
          user:"mehty",
          condition:{
            localDate:[
              {title:"همین هفته",selected:true},
              {title:"هفته دیگه",selected:true},
              {title:"بزاریم چند هفته دیگه تعطیلاته اون موقع",selected:true},
              {title:"اخر ماه",selected:true},
              {title:"اخر سال",selected:true},
            ],
            placeName:[
              {title:"شمال تهران",selected:true},
              {title:"شرق تهران",selected:true},
              {title:"غرب تهران",selected:true},
              {title:"شمال تهران",selected:false},
            ],
            state:1
          }
        },
        {
          user:"hasan",
          condition:{
            localDate:[
              {title:"همین هفته",selected:false},
              {title:"هفته دیگه",selected:true},
              {title:"بزاریم چند هفته دیگه تعطیلاته اون موقع",selected:false},
              {title:"اخر ماه",selected:true},
              {title:"اخر سال",selected:false},
            ],
            placeName:[
              {title:"شمال تهران",selected:true},
              {title:"شرق تهران",selected:false},
              {title:"غرب تهران",selected:true},
              {title:"شمال تهران",selected:true},
            ],
            state:1
          }
        },
        {
          user:"hesam",
          condition:{
            localDate:[
              {title:"همین هفته",selected:false},
              {title:"هفته دیگه",selected:true},
              {title:"بزاریم چند هفته دیگه تعطیلاته اون موقع",selected:false},
              {title:"اخر ماه",selected:true},
              {title:"اخر سال",selected:true},
            ],
            placeName:[
              {title:"شمال تهران",selected:true},
              {title:"شرق تهران",selected:true},
              {title:"غرب تهران",selected:false},
              {title:"شمال تهران",selected:false},
            ],
            state:1
          }
        },
        {
          user:"nader",
          condition:{
            localDate:[
              {title:"همین هفته",selected:true},
              {title:"هفته دیگه",selected:false},
              {title:"بزاریم چند هفته دیگه تعطیلاته اون موقع",selected:true},
              {title:"اخر ماه",selected:true},
              {title:"اخر سال",selected:true},
            ],
            placeName:[
              {title:"شمال تهران",selected:true},
              {title:"شرق تهران",selected:true},
              {title:"غرب تهران",selected:true},
              {title:"شمال تهران",selected:true},
            ],
            state:1
          }
        }
      ]
    },
    {
      title:"شمال هستید بچه ها؟",
      desceriptions:"یه ویلا پیدا کردم اگه ماشین دارید بیارید بریم نداریدم اتوبوس میگیریم",
      status:"",
      creator:"",
      locationLink:"",
      conditions:[
        {
          user:"creator",
          condition:{
            localDate:[
              {title:"اخر ماه"},
              {title:"فردا"},
              {title:"ماه دیگه"},
              {title:"اخر سال"},
              {title:"جمعه"},
              {title:"سال دیگه"},
            ],
          }
        },
        {
          user:"final",
          condition:{
            localDate:[
              {title:"اخر ماه"}
            ],
            placeName:[
              {title:"ویلای ما"}
            ]
          }
        },
        {
          user:"mehty",
          condition:{
            localDate:[
              {title:"اخر ماه",selected:true},
              {title:"فردا",selected:true},
              {title:"ماه دیگه",selected:true},
              {title:"اخر سال",selected:true},
              {title:"جمعه",selected:true},
              {title:"سال دیگه",selected:false},
            ],
            state:1
          }
        },
        {
          user:"ali",
          condition:{
            localDate:[
              {title:"اخر ماه",selected:true},
              {title:"فردا",selected:false},
              {title:"ماه دیگه",selected:false},
              {title:"اخر سال",selected:true},
              {title:"جمعه",selected:false},
              {title:"سال دیگه",selected:false},
            ],
            state:1
          }
        },
        {
          user:"mamad",
          condition:{
            localDate:[
              {title:"اخر ماه",selected:true},
              {title:"فردا",selected:true},
              {title:"ماه دیگه",selected:false},
              {title:"اخر سال",selected:false},
              {title:"جمعه",selected:false},
              {title:"سال دیگه",selected:true},
            ],
            state:1
          }
        },
        {
          user:"omid",
          condition:{
            localDate:[
              {title:"اخر ماه",selected:true},
              {title:"فردا",selected:false},
              {title:"ماه دیگه",selected:false},
              {title:"اخر سال",selected:true},
              {title:"جمعه",selected:true},
              {title:"سال دیگه",selected:false},
            ],
            state:1
          }
        },
        {
          user:"hosein",
          condition:{
            localDate:[
              {title:"اخر ماه",selected:false},
              {title:"فردا",selected:false},
              {title:"ماه دیگه",selected:false},
              {title:"اخر سال",selected:false},
              {title:"جمعه",selected:true},
              {title:"سال دیگه",selected:true},
            ],
            state:1
          }
        },
        {
          user:"shady",
          condition:{
            localDate:[
              {title:"اخر ماه",selected:false},
              {title:"فردا",selected:true},
              {title:"ماه دیگه",selected:true},
              {title:"اخر سال",selected:false},
              {title:"جمعه",selected:false},
              {title:"سال دیگه",selected:false},
            ],
            state:1
          }
        },
        {
          user:"darya",
          condition:{
            localDate:[
              {title:"اخر ماه",selected:true},
              {title:"فردا",selected:true},
              {title:"ماه دیگه",selected:true},
              {title:"اخر سال",selected:true},
              {title:"جمعه",selected:false},
              {title:"سال دیگه",selected:false},
            ],
            state:1
          }
        }
      ]
    }
  ];
  constructor() {
    this.groups=[
      {
        name:"کامپیوتر 1400",
        link:"کامپیوتر 1400",
        creator:"مِهتی",
        events:[
          this.events[0],
          this.events[1],
          this.events[2],
          this.events[0],
          this.events[1],
          this.events[2],
          this.events[0],
          this.events[1],
          this.events[2],
          this.events[0],
          this.events[1],
          this.events[2],
          this.events[0],
          this.events[1],
          this.events[2],
        ],
        users:[
          "mehty",
          "ali",
          "حسن",
          "حصین",
          "AmirAli",
          "Qmars",
          "nader",
          "omid",
          "kimia",
          "sorush",
          "رضا",
          "هادی",
          "kurosh",
          "shima",
          "sia",
          "علیرضا",
          "محمد",
          "ممد",
          "nazanin",
          "amir mohammad",
          "amir reza",
          "melina",
          "شبنم",
          "شادی",
          "sadegh",
        ],
      },
      {
        name:"خودمونی",
        link:"خودمونی",
        creator:"مِهتی",
        events:this.events,
        users:[
          "mehty",
          "mamad",
          "ali",
          "ahmad",
          "nasim",
          "sahel",
          "hosein",
          "kimia",
        ],
      },
      {
        name:"بچه های دانشگاه",
        link:"بچه های دانشگاه",
        creator:"مِهتی",
        events:[
          this.events[0],
          this.events[3]
        ],
        users:[
          "user 1",
          "user 2",
          "user 3",
          "user 4",
          "user 5",
          "user 6",
          "user 7",
          "user 8",
          "user 9",
          "user 10",
        ],      },
      {
        name:"بچه های صنایع",
        link:"بچه های صنایع",
        creator:"مِهتی",
        events:[
          this.events[0],
          this.events[0],
          this.events[0],
          this.events[0],
          this.events[0],
        ],
        users:[
          "صنایع 1",
          "صنایع 2",
          "صنایع 3",
          "صنایع 4",
          "صنایع 5",
          "صنایع 6",
          "صنایع 7",
          "صنایع 8",
          "صنایع 9",
          "صنایع 10",
        ],
      },
      {
        name:"بچه های محل",
        link:"بچه های محل",
        creator:"مِهتی",
        events:[
          this.events[0],
          this.events[1],
          this.events[2],
          this.events[3],
          this.events[0],
        ],
        users:[
          "user 1",
          "user 2",
          "user 3",
          "user 4",
          "user 5",
          "user 6",
          "user 7",
          "user 8",
          "user 9",
          "user 10",
        ],
      },
      {
        name:"بچه های شرکت",
        link:"بچه های شرکت",
        creator:"مِهتی",
        events:[
          this.events[2],
          this.events[2],
          this.events[2],
        ],
        users:[
          "user 1",
          "user 2",
          "user 3",
          "user 4",
          "user 5",
          "user 6",
          "user 7",
          "user 8",
          "user 9",
          "user 10",
        ],      },
    ]
  }
}
