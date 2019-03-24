import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninAuthService {
 
  constructor(private http :HttpClient) { }
  
  serverUrl= 'http://mahmoudzeyada.pythonanywhere.com/api/login/';
  
  signIn(userInfo:{}){
   return this.http.post(this.serverUrl ,userInfo)
  }
}
