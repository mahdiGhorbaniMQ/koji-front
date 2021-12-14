import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface ConditionRequest{
  dates:String[];
  places:String[];
  state:number;
}

@Injectable({
  providedIn: 'root'
})
export class ConditionApiService {

  constructor(private http:HttpClient) { }

  setConditionById(condiotionData:ConditionRequest,eventId:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': 'Bearer '+ localStorage.getItem("token")})
    };
    return this.http.post(environment.api+"/condition/set?eventId="+eventId,condiotionData,httpOptions);
  }
  getAllConditionsByEventId(eventId:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': 'Bearer '+ localStorage.getItem("token")})
    };
    return this.http.get(environment.api+"/condition/getAll?eventId="+eventId,httpOptions);
  }
  getOneCondition(eventId:String,username:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': 'Bearer '+ localStorage.getItem("token")})
    };
    return this.http.get(environment.api+"/condition/getOne?eventId="+eventId+"&username="+username,httpOptions);
  }
}
