import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


interface SignupRequest{
  firstName:String,
  lastName:String,
  email:String,
  username:String,
  password:String
}

interface SigninRequest{
  username:String,
  password:String
}

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http:HttpClient) { }

  signup(userdata:SignupRequest):Observable<any>{
    return this.http.post(environment.api+"/auth/signup",userdata);
  }

  signin(userdata:SigninRequest):Observable<any>{
    return this.http.post(environment.api+"/auth/signin",userdata);
  }
  
}
