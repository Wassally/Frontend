import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { Package } from './modeles/package.model';
import { User } from './modeles/user.model';



@Injectable({
  providedIn: 'root'
})
export class ClientPackagesService {
  
  constructor(private http:HttpClient , 
  private userServices : UserService) {}
  serverUrl  = 'http://mahmoudzeyada.pythonanywhere.com/api/packages/' ;
  token = localStorage.getItem('token') ;
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Token ${this.token}`
    })
  };

  
  packages = [
    {
      number : 54866 , 
      To : 'Ahmed' ,
      location : 'Mansoura' , 
      from : 'cairo' ,
      state : 'pending ' , 
       
      captin : {
        id : 2125 , 
        name : 'essam', 
        imageUrl:'assets/img/client/profile1.png',
      }, 
      
    }
     , 
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
     , 
    {
      number : 52544 , 
      To : 'Mohamed' ,
      location : 'Cairo' , 
      from : 'Aswaan' ,
      state : 'pending ' ,  
      captin : {
        id : 2125 , 
        name : 'reda' ,
        imageUrl:'assets/img/client/profile.png',
       } ,
       
    } 
   
    
    ] ; 

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

    getallpackages(){
      return this.packages;
      
    }
    postPackage(Newpackage:{}){
      return this.http.post(this.serverUrl , Newpackage  , this.httpOptions )
    }


}
