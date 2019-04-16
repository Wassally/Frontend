import { Component, OnInit, NgModule, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ClientPackagesService } from '../client-packages.service';
import { UserService } from '../user.service';
//import { Router, RouterModule, Routes } from '@angular/router';
 

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss']
}) 



export class DeliveriesComponent implements OnInit {
 
   id :number;
    
   userPackages : [{}] ; 

  constructor(
    private router : Router , 
    private packagesService:ClientPackagesService , 
    private userServives :UserService
    ) {
        
     
     }

  ngOnInit() {
  }
  packages =this.packagesService.getallpackages();
  
  


    openPackage( inpackage : {
      number : number , To : string ,location : string , from : string ,state : string ,  
      captin : {
        id : number, 
        name : string ,
        imageUrl:string,
       }

    }){
    
    
      this.id=inpackage.number ; 
  
    }
    
  

}
