import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientPackagesService {

  constructor() { 

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
        name : 'essam', 
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
       } ,
       
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
    
    getpackages(packageNumber:number)  {
      return this.packages.find((element)=>{
        return element.number == packageNumber ;
      })
    }

    getallpackages(){
      return this.packages;
      
    }




}
