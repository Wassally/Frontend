import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '@app/client/core/models/user.model';
import { UserService } from '@app/client/core/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(
    private userServices : UserService , 
    
  ) { }


   user:User = this.userServices.user ; 

  ngOnInit() {
  }

  submitEdit(form:NgForm){
    const updatedData = {
      "firstName" : form.value.firstName ,   
      "email" : form.value.email ,
      "lastName" : form.value.lastName ,
      "phone_number" : form.value.phoneNumber 
    }
      this.userServices.updateUserData(updatedData).subscribe(
        ()=>{
          console.log("updated");
          
        }
      )
  }

}
