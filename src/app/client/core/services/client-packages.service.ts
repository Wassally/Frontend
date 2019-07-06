import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';
import { Package } from '../models/package.model';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { APIService } from './api.service';
import { Observable } from 'rxjs';



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
   
   private  sippmentTempPrice : number  = 0 ; 
   newCreatedPackage : any  ; 

  /**
   * userPackages  =>  Array of object  package Model 
   */
 
    currentUser  :User ; 
    userPackages : Array<Package> = []; 
    NewPackage : any ;
    displayedPackages : any  ; 
    
    
    setPackages (packages : [{}] , filterMode?:boolean){
      //this.currentUser = this.userServices.user;
      console.log(this.userServices.user.packages.length )
      if(packages){
        if(filterMode)  this.userPackages=[] ; 
      packages.forEach((element  , index :number) =>{
        this.userPackages[index] =  new Package(element) ;
       })
     
      }

     
    }
    setdisplayedPackage(packages:[{}]) { 
      if(packages){
      packages.forEach((el , i) => {
        this.displayedPackages[i]= new Package(el) ; 
      }) ; 
      return this.displayedPackages ; 
    }
    
  }
    
    getUserpackages():Array<Package>{
      return this.userPackages;  
    } 

    //search with package by id 
    getpackage(packageNumber:number)  {
      return this.userPackages.find((element)=>{
        return element.id == packageNumber ;
      })
    }

    //get package api 

    getAllPackage(){
      const  path  = '/packages/' ;
      return this.api.get(path) ; 
    }
    getPackageById(id:number){
      const  path  = `/packages/${id}` ;
      return this.api.get(path) ; 
    }

    //get pacakge Price to confermation 
    
    getShipmemtPrice(PriceEq:any){
      const path = '/computingsalary/' ; 
      return this.api.post(path , PriceEq) ; 
    }
    setPrice(price:number ) { 
     this.sippmentTempPrice = price ; 
    }
    returnPrice () {
      return this.sippmentTempPrice ; 
    }
    
    //create New Package 
    postPackage(Newpackage:{}){
      const  path  = '/packages/' ;
      return this.api.post(path , Newpackage) ;
    }
 //// Package Filter 

 filter(filterParameter : string){
  const param = new HttpParams({
    fromString : `delivery__state=${filterParameter}`
  }) ;
  const  path  = '/packages/';

  return this.api.get(path,param) ; 
 }






 //
 simpleObservable = new Observable((observer) => {
    
  // observable execution
  observer.next(this.userPackages)
  observer.complete()
})

} 
