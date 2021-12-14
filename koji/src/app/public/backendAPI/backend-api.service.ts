import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConditionModel } from '../models/condition-model';
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
  getUserTocken(username:string,password:string):any{
    var reqBody = {
      "username" : username,
      "password" : password
    }
    return this.http.post(this.apiUrl+"/auth/signin/",reqBody);
  }
  getUserData(email:string):any{
    return this.http.get(this.apiUrl+"/user/"+email+"/detail")
  }

  updateAcount(lastEmail:string,email:string,name:string):any{
    var reqBody = {
      "email" : email,
      "name" : name,
    }
    var token = localStorage.getItem("token");

    var httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': 'Token '+token })
    };
    return this.http.put(this.apiUrl+"/user/"+lastEmail+"/update",reqBody,httpOptions);
  }
  deleteAcount(email:string){

    var token = localStorage.getItem("token");

    var httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': 'Token '+token })
    };
    return this.http.delete(this.apiUrl+"/user/"+email+"/delete",httpOptions);
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
  deleteGroup(id:string):any{
    
    var token = localStorage.getItem("token");

    var httpOptions = {
      headers: new HttpHeaders({ 
      'Authorization': 'Token '+token })
    };
    
    return this.http.delete(this.apiUrl+"/team/"+id+"/delete/",httpOptions);
  }

  sendUserConditions(conditions:ConditionModel):any{
    return this.http.get(this.apiUrl);
  }
  getFinalConditions():any{
    return this.http.get(this.apiUrl)
  }
}
