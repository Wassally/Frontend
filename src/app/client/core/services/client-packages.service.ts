import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { Package } from '../models/package.model';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { APIService } from './api.service';



@Injectable({
  providedIn: 'root'
})
export class ClientPackagesService {
  
  constructor(private http:HttpClient , 
  private userServices : UserService , 
  private api : APIService
  
  ) {}
   path  = '/packages/' ;
 /* token = localStorage.getItem('token') ;
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Token ${this.token}`
    })
  };*/

  
 

    userPackage : Array<Package> = []; 
    getUserpackage(){
     
       const currentUser : User =  JSON.parse(localStorage.getItem('user'));
      currentUser.packages.forEach((element  , index :number) =>{
          const packageModel = new Package(element) ;
          this.userPackage[index] =  packageModel ;
      })
      return this.userPackage;  
    } 


    getpackages(packageNumber:number)  {
      return this.userPackage.find((element)=>{
        return element.packageNumber == packageNumber ;
      })
    }

    postPackage(Newpackage:{}){
      
      return this.api.post(this.path , Newpackage) ;
    }


}
