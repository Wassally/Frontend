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
    const city = form.value.city;
    const governate =form.value.governate;
    const userData = {
     
      "username": firstName + '@' + lastName , 
      "email" : email ,
      "password" : password ,
      "governate":governate ,
      "city" : city ,
      "is_client":"true" ,
      "is_captain": "false",
      "phone_number":phone
    } ;
    
    this.signupServices.signup(userData)
    .subscribe(
      (Response) => console.log(Response) ,
      (error) => console.log(error)
    );

    
  }

}
