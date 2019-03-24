import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor( private http : HttpClient) { }
  
  serverUrl='http://mahmoudzeyada.pythonanywhere.com/api/accounts.json';
  
  signup( userData:{}){
    
    return this.http.post(this.serverUrl,userData);
  }

}
