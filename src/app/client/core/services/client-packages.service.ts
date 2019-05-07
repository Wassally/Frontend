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
    this.currentUser.packages.forEach((element  , index :number) =>{
     this.userPackages[index] =  new Package(element) ;
  })
  }
   path  = '/packages/' ;

  /**
   * userPackages  =>  Array of object  package Model 
   */
  currentUser : User =  JSON.parse(localStorage.getItem('user'));
    userPackages : Array<Package> = []; 
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
