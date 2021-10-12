import { Injectable } from '@angular/core';
import { HeaderInformationService } from '../information/header-information.service';
import { HeaderItemModel } from '../model/header-item-model';

@Injectable({
  providedIn: 'root'
})
export class HeaderControllerService {

  constructor(private information:HeaderInformationService) { }

  getHeaderItems():HeaderItemModel[]{
    return this.information.headerItems
  }

}
