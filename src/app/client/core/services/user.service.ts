import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@app/client/core/models/user.model';
import { APIService } from './api.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {
 
     user : User ;
      id : number ;
  constructor( private http : HttpClient , 
    private apiServer : APIService
    ) {

   }

  getUserData(){  
    const path = `/accounts/me` ; 
      return this.apiServer.get(path)  
      ; 
    
  }
  // updateUser(){
  //   this.getUserData().subscribe()
  // }

  updateUserData(updatedData:any){
    const id = this.user.id ; 
    debugger ;
    const path = `/accounts/${id}/`;
    console.log(updatedData);
    return this.apiServer.patch(path , updatedData)
  }
  


  

}
