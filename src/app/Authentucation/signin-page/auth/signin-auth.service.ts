import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigninAuthService {
  public userAuth: BehaviorSubject</*User*/any> = new BehaviorSubject(null);
 
  constructor(private http :HttpClient) { 
   
  }
  /**
   *sign in with email and password  
   */
  path= '/login/';
  
  signIn(userEmailPassword:{}){
   return this.http.post(`${environment.api_url}${this.path}` ,userEmailPassword)
  }
}
