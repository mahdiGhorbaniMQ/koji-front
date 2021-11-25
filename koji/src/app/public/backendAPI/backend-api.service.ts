import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConditionsModel } from '../models/conditions-model';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {

  constructor(private http:HttpClient) { }
  apiUrl="https://kojiapi.iran.liara.run/api"

  createAcount(email:string,name:string,password:string):any{
    var reqBody = {
      "email" : email,
      "name" : name,
      "password" : password
    }
    return this.http.post(this.apiUrl+"/user/create/",reqBody);
  }
  getUserTocken(email:string,password:string):any{
    var reqBody = {
      "username" : email,
      "password" : password
    }
    return this.http.post(this.apiUrl+"/user/login/",reqBody);
  }
  getUserData(email:string):any{
    return this.http.get(this.apiUrl+"/user/"+email+"/detail")
  }

  updateAcount(lastEmail:string,user:UserModel):any{
    var name = user.name;
    var email = user.email;
    var reqBody = {
      "email" : email,
      "name" : name      
    }
    return this.http.put(this.apiUrl+"/user"+lastEmail+"/update",reqBody);
  }
  deleteAcount(email:string){
    return this.http.delete(this.apiUrl+"/user/"+email+"/delete");
  }


  getAllUsers(){
    return this.http.get(this.apiUrl+"/user/list");
  }



  createGroup(name:string,bio:string,users:string[]):any{
    
    var token = localStorage.getItem("token");

    var reqBody = {
      "name" : name,
      "bio": bio,
      "users": users
    }

    var httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': 'Token '+token })
    };
    
    return this.http.post(this.apiUrl+"/team/create/",reqBody,httpOptions);
  }

  sendUserConditions(conditions:ConditionsModel):any{
    return this.http.get(this.apiUrl);
  }
  getFinalConditions():any{
    return this.http.get(this.apiUrl)
  }
}
