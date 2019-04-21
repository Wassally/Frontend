import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './modeles/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
     user : User ;
      id : number ;
  constructor( private http : HttpClient) {

   }

  getUserData(){  
    const apiCall = ` http://mahmoudzeyada.pythonanywhere.com/api/accounts/${this.id}` ; 
      return this.http.get(apiCall)  
      ; 
    
  }
  

}
