import { Injectable } from '@angular/core';
import { HeaderItemModel } from '../model/header-item-model';

@Injectable({
  providedIn: 'root'
})
export class HeaderInformationService {
  headerItems:HeaderItemModel[]=[];
  constructor() { 
    this.headerItems=[
      {
        title:"گروه ها",
        path:"user/home"
      },
      {
        title:"تاریخچه قرار ها",
        path:"user/history"
      },
      {
        title:"تقویم",
        path:"user/callender"
      },
    ]
  }
}
