import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface updateData{
  firstName:String,
  lastName:String
}

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  
  constructor(private http:HttpClient) { }
  getDetails():Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': 'Bearer '+ localStorage.getItem("token")})
    };
    return this.http.get(environment.api+"/user/details",httpOptions);
  }

  getProfileByUserName(username:String):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': 'Bearer '+ localStorage.getItem("token")})
    };
    return this.http.get(environment.api+"/user/profile?username="+username,httpOptions);
  }

  update(userData:updateData):Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': 'Bearer '+ localStorage.getItem("token")})
    };
    return this.http.put(environment.api+"/user/update",userData,httpOptions);
  }

  delete():Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': 'Bearer '+ localStorage.getItem("token")})
    };
    return this.http.delete(environment.api+"/user/delete",httpOptions);
  }
  
}
