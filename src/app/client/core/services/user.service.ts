import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@app/client/core/models/user.model';
import { environment } from 'src/environments/environment';
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
    const path = `/accounts/${this.id}` ; 
      return this.apiServer.get(path)  
      ; 
    
  }
  

}
