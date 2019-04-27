import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor() { }


   userS = {
    firstname: 'Ahmed' , 
    lastName: 'Kenawy' , 
    email : 'ahmed.elkenawy95@gmail.com' , 
    phoneNumber :  "010978862814" , 

  }


  ngOnInit() {
  }

}
