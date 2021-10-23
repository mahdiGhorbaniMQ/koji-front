import { Injectable } from '@angular/core';
import { BackendAPIService } from 'src/app/public/backendAPI/backend-api.service';
import { EventInformationService } from '../information/event-information.service';

@Injectable({
  providedIn: 'root'
})
export class EventControllerService {
  constructor(private backendAPI:BackendAPIService,
              private information:EventInformationService) { }
  setEventData(){
    // this.information.eventData=this.backendAPI.getEventData();
  }
  
}
