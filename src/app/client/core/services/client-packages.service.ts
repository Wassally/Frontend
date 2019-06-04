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

/**
 * package services* of client  
 */
export class ClientPackagesService {
  
  constructor(
    private http:HttpClient , 
    private userServices : UserService , 
    private api : APIService
  
  ) {
   
  }
   path  = '/packages/' ;

  /**
   * userPackages  =>  Array of object  package Model 
   */
 
    currentUser  :User ; 
    userPackages : Array<Package> = []; 
    
    setUser (){
      this.currentUser = this.userServices.user;
      if(this.currentUser.packages){
      this.currentUser.packages.forEach((element  , index :number) =>{
      this.userPackages[index] =  new Package(element) ;
       })  
      }
    }
    
    getUserpackages(){
     
      return this.userPackages;  
    } 


    getpackage(packageNumber:number)  {
      return this.userPackages.find((element)=>{
        return element.packageNumber == packageNumber ;
      })
    }

    postPackage(Newpackage:{}){
      
      return this.api.post(this.path , Newpackage) ;
    }


}
