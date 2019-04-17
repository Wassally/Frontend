import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninAuthService {
  public userAuth: BehaviorSubject</*User*/any> = new BehaviorSubject(null);
 
  constructor(private http :HttpClient) { 
    /* setTimeout(() => {
      this.userAuth.next("singin works after 1 sec")
    }, 1000);
    setTimeout(() => {
      this.userAuth.next({
        name: "mohamed",
        age: 21,
        image: "http://placehold.it/350x350"
      })
    }, 4000); */
  }
  
  serverUrl= 'http://mahmoudzeyada.pythonanywhere.com/api/login/';
  
  signIn(userInfo:{}){
   return this.http.post(this.serverUrl ,userInfo)
  }
}
