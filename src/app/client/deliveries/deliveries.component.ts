import { Component, OnInit, NgModule, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ClientPackagesService } from '../core/services/client-packages.service';
import { UserService } from '../core/services/user.service';
import { Package } from '../core/models/package.model';
//import { Router, RouterModule, Routes } from '@angular/router';
 

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss']
}) 



export class DeliveriesComponent implements OnInit {
 
   id :number;
   noPackage = true ; 
    
   //@Input() userPackages : any ; 

  constructor(
    private router : Router , 
    private packagesService:ClientPackagesService , 
    private userServives :UserService
    ) {
         
     
     }
     @Input()  packages: Array<Package>  ;
    //noPackages =this.packages.length !=0 ? false : true ;
  ngOnInit() {
  if (this.packagesService.filterMode) { 
    
    this.packages=this.packagesService.userPackages ;
    if(this.packages.length !=0)  this.noPackage = false ; 
   // this.packagesService.filterMode= false ;
  

  }
  
  else{


    this.packagesService.getAllPackage().subscribe(
      res =>{
        this.packagesService.setPackages(res , false) ; 
        this.packages = this.packagesService.getUserpackages() ; 
        if(this.packages.length !=0)  this.noPackage = false ; 
      }
    )
  
  }










  
  
  
  }

  
    openPackage( inpackage :Package){
    
    
      this.id=inpackage.id ; 
  
    }
    
  

}
