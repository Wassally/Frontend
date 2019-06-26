import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from '../signup-services.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {


  constructor(private signupServices : SignupService) { }

  ngOnInit() {
  }
  onSignup(form:NgForm){
    const firstName =form.value.firstName;
    const lastName = form.value.lastName;
    const email  = form.value.email;
    const password = form.value.password;
    const phone = form.value.phone;
    
    const userData = {
     
      "first_name": firstName , 
      "last_name":lastName , 
      "username":  (firstName+ lastName +((Math.random()*1000).toFixed(0)).toString()).toLowerCase(),
      "email" : email ,    
      "password" : password ,
      "is_client":"true" ,
      "is_captain": "false",
      "phone_number":phone
    } ;
    console.log(userData);
    
    this.signupServices.signup(userData)
    .subscribe(
      (Response) => console.log(Response) ,
      (error) => console.log(error)
    );

    
  }

}
