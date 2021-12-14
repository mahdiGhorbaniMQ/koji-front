import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface GroupRequest{
  name:String;
  bio:String;
}

@Injectable({
  providedIn: 'root'
})
export class GroupApiService {

  constructor(private http:HttpClient) { }

  create(groupData:GroupRequest):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': 'Bearer '+ localStorage.getItem("token")})
    };
    return this.http.post(environment.api+"/group/create",groupData,httpOptions);
  }
  updateById(groupData:GroupRequest,groupId:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': 'Bearer '+ localStorage.getItem("token")})
    };
    return this.http.put(environment.api+"/group/update?groupId="+groupId,groupData,httpOptions);
  }
  getDetailsById(groupId:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': 'Bearer '+ localStorage.getItem("token")})
    };
    return this.http.get(environment.api+"/group/details?groupId="+groupId,httpOptions);
  }
  getProfileById(groupId:String){
    var httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': 'Bearer '+ localStorage.getItem("token")})
    };
    return this.http.get(environment.api+"/group/profile?groupId="+groupId,httpOptions);
  }
  deleteById(groupId:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': 'Bearer '+ localStorage.getItem("token")})
    };
    return this.http.get(environment.api+"/group/delete?groupId="+groupId,httpOptions);
  }
  addUser(groupId:String,username:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': 'Bearer '+ localStorage.getItem("token")})
    };
    return this.http.get(environment.api+"/group/addUserToGroup?GroupId="+groupId+"&username="+username,httpOptions);
  }
  removeUser(groupId:String,username:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': 'Bearer '+ localStorage.getItem("token")})
    };
    return this.http.get(environment.api+"/group/removeUserFromGroup?GroupId="+groupId+"&username="+username,httpOptions);
  }
}
