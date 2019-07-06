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
    
   @Input() userPackages : any ; 

  constructor(
    private router : Router , 
    private packagesService:ClientPackagesService , 
    private userServives :UserService
    ) {
        
     
     }
     @Input()  packages: Array<Package>  ;
    noPackages =true ;
    
     
  

  ngOnInit() {
  
    this.packages=this.packagesService.getUserpackages() ; 
    // this.packagesService.getAllPackage().subscribe( (res:any)=>{
    //   this.packagesService.setPackages(res, false) ; 
    //   this.packages=this.packagesService.getUserpackages() ; 
    // }


   // );  
   // this.packagesService.simpleObservable.subscribe((res:any)=>this.packages=res)
  //   this.packagesService.getAllPackage().subscribe((r: Array<Package>) =>{
  //   const serverPackage  = [] ; 
  //   if(r.length == 0){
  //     this.noPackages=false ; 
  //   } 
  //   r.forEach((el , i)=>{
  //     serverPackage[i] = new Package(el) ; 
  //   })
  //   this.packagesService.displayedPackages = serverPackage; 
  // })
  
  
  }
    openPackage( inpackage :Package){
    
    
      this.id=inpackage.id ; 
  
    }
    
  

}
