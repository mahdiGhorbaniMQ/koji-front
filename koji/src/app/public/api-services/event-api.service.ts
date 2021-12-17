import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface EventRequest{
  title:String;
  descriptions:String;
  groupId:String;
  places:String[];
  dates:String[];
}
interface finalConditionRequest{
  finalDate:String;
  finalPlace:String;
}
@Injectable({
  providedIn: 'root'
})
export class EventApiService {

  constructor(private http:HttpClient) { }

  create(eventData:EventRequest):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      })
    };
    return this.http.post(environment.api+"/event/create",eventData,httpOptions);
  }
  updateById(eventData:EventRequest,eventId:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      })
    };
    return this.http.put(environment.api+"/event/update?eventId="+eventId,eventData,httpOptions);
  }
  deleteById(eventId:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      })
    };
    return this.http.delete(environment.api+"/event/delete?eventId="+eventId,httpOptions);
  }
  getDetailsByEventId(eventId:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      })
    };
    return this.http.get(environment.api+"/event/details?eventId="+eventId,httpOptions);
  }
  addToGroup(eventId:String,groupId:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      })
    };
    return this.http.get(environment.api+"/event/addEventToGroup?eventId="+eventId+"&groupId="+groupId,httpOptions);
  }
  removeFromGroup(eventId:String,groupId:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      })
    };
    return this.http.get(environment.api+"/event/removeEventFromGroup?eventId="+eventId+"&groupId="+groupId,httpOptions);
  }
  getVotesByEventId(eventId:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      })
    };
    return this.http.get(environment.api+"/event/votes?eventId="+eventId,httpOptions);
  }
  setAgreementByEventId(eventId:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      })
    };
    return this.http.get(environment.api+"/event/setUserAgreement?eventId="+eventId,httpOptions);
  }
  setDisagreementByEventId(eventId:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      })
    };
    return this.http.get(environment.api+"/event/setUserDisagreement?eventId="+eventId,httpOptions);
  }
  retractVoteByEventId(eventId:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      })
    };
    return this.http.get(environment.api+"/event/retractVote?eventId="+eventId,httpOptions);
  }
  setFinalConditionByEventId(finalCondition:finalConditionRequest,eventId:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
        'Authorization': 'Bearer '+ localStorage.getItem("token")
      })
    };
    return this.http.put(environment.api+"/event/setFinalCondition?eventId="+eventId,finalCondition,httpOptions);
  }
}
