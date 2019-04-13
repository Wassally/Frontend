import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SigninAuthService } from '../auth/signin-auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor( private signinAuth : SigninAuthService  ,private router :Router) { }
  onSignin(form:NgForm){
    const email =form.value.email;
    const password =form.value.password;
    console.log(email);
    this.signinAuth.signIn({"username" : email , "password" :password})
    .subscribe(
      (user)=> {console.log(user);
        localStorage.setItem('token' , user.auth_token);
        this.router.navigate(['/main']) ;
      },
      (error)=>{
        console.log(error)
        alert("invalid Email or password ");
      }
    );
  }
  ngOnInit() {
  }

}
  
