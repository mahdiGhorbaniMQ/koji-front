import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConditionsModel } from '../models/conditions-model';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {

  constructor(private http:HttpClient) { }
  apiUrl="http://localhost:4200/api/"
  getUserData(email:string):any{
    return this.http.get(this.apiUrl)
  }
  createAcount(user:UserModel):any{
    return this.http.get(this.apiUrl)
  }
  sendUserConditions(conditions:ConditionsModel):any{
    return this.http.get(this.apiUrl);
  }
  getFinalConditions():any{
    return this.http.get(this.apiUrl)
  }
}
