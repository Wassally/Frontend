import { Component, OnInit, NgModule } from '@angular/core';
//import { Router, RouterModule, Routes } from '@angular/router';
 

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss']
}) 






export class DeliveriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

packages = [
    {
      number : 54866 , 
      To : 'Ahmed' ,
      location : 'Mansoura' , 
      from : 'cairo' ,
      state : 'waitting ' ,  
      captin : {
        id : 2125 , 
        name : 'Ali', 
        imageUrl:'assets/img/client/profile1.png',
      }, 
      
    } , 
    {
      number : 52544 , 
      To : 'Mohamed' ,
      location : 'Cairo' , 
      from : 'Aswaan' ,
      state : 'waitting ' ,  
      captin : {
        id : 2125 , 
        name : 'reda' ,
        imageUrl:'assets/img/client/profile.png',
       }
    }
    
    ] ;  

}
