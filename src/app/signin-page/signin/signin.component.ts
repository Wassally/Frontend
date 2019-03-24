import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SigninAuthService } from '../auth/signin-auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor( private signinAuth : SigninAuthService ) { }
  onSignin(form:NgForm){
    const email =form.value.email;
    const password =form.value.password;
    console.log(email);
    this.signinAuth.signIn({"username" : email , "password" :password})
    .subscribe(
      (Response)=> console.log(Response) ,
      (error)=>console.log(error)
    );
  }
  ngOnInit() {
  }

}
  
