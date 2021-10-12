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
        title:"home",
        path:""
      },
      {
        title:"hestory",
        path:""
      },
      {
        title:"callender",
        path:""
      },
    ]
  }
}
