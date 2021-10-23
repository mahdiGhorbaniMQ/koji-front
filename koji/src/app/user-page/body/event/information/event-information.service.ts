import { Injectable } from '@angular/core';
import { ConditionsModel } from 'src/app/public/models/conditions-model';
import { EventModel } from 'src/app/public/models/event-model';

@Injectable({
  providedIn: 'root'
})
export class EventInformationService {
  userConditions?:ConditionsModel;
  allConditions:ConditionsModel[]=[];
  finalConditions?:ConditionsModel;
  eventData!:EventModel;
  constructor() { }
}
