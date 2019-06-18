import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SigninAuthService } from '../auth/signin-auth.service';
import { Router } from '@angular/router';
import { UserService } from '@app/client/core/services/user.service';
import { ClientPackagesService } from '@app/client/core/services/client-packages.service';
import { User } from '@app/client/core/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  [x: string]: any;

  constructor( private signinAuth : SigninAuthService 
     ,private router :Router
     , private userService:UserService , 
     private packagesService :ClientPackagesService , 
    
     
     ) { }
 
 /***
  * need to be arranged ! ! 
  */
     onSignin(form:NgForm){
    const email =form.value.email;
    const password =form.value.password;
    console.log(email);
    this.signinAuth.signIn({"username" : email , "password" :password})
    .subscribe(
      (user : {
        
        auth_token :string  ,
        email:string ,
        name:string , 
        user_id:number
      })=> {console.log(user);
      
        localStorage.setItem('token' , user.auth_token);
        this.userService.id= user.user_id;
        
        localStorage.setItem('id' , JSON.stringify(user.user_id) ) ;
        this.userService.getUserData() 
        .subscribe(
          (respond)=> {
            this.router.navigate(['/main']) ;
            const currentUser  = new User(respond) ;
            this.userService.user = currentUser ; 
          //  localStorage.setItem('user' , JSON.stringify(currentUser)) 
           // console.log(this.userService.user)
              this.packagesService.setUser();
              //  this.router.navigate(['/main']) ;
          } , 
          (err)=>{
            console.log(err)
          }
        )
     
      },
      (error:HttpErrorResponse)=>{
        
                if(error.status==400){
                  alert("invalid Email or password ");
                }
        // console.log(error)
        // alert("invalid Email or password ");
      }
    );
  }
  ngOnInit() {
  }

}
  
