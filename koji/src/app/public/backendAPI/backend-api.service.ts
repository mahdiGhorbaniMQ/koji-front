import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { ConditionsModel } from '../models/conditions-model';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {

  constructor(private http:HttpClient) { }
  apiUrl="http://localhost:4200/api/";

  getUserData(email:string):any{
    return this.http.get(this.apiUrl);
  }
  getTocken(username:string,password:string):Observable<any>{
    return this.http.get(this.apiUrl+"/getTocken?username="+username+"&password="+password);
  }
  createAcount(user:UserModel):any{
    return this.http.get(this.apiUrl);
  }
  connectToChatSocket(chatId:string){

  }
  connectToEventSocket(eventId:string){

  }
}
