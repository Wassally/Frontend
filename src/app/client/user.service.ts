import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 /*user:{
      auth_token: null,  
      captain: null , 
      city: string , 
      created_at: string , 
      email: string , 
      first_name: string,
      governate: string,
      id:number,
      image: string,
      is_captain: boolean,
      is_client: boolean,
      last_name: string,
      packages: [{}],
      password_updated_message: null,
      phone_number: string,
      updated_at: string,
      username: string
     }  */
     user:{}
  constructor( private http : HttpClient) {
    ;

   }

  getUserData(id ){  
    const apiCall = ` http://mahmoudzeyada.pythonanywhere.com/api/accounts/${id}` ; 
       this.http.get(apiCall) 
      .subscribe(Response =>{
        this.user = Response ; 
        console.log('get user data done') ; 
        console.log(this.user)
      }  , 
      (error)=>{
        console.log(error)
      } ) 
      ; 
    
  }
}
