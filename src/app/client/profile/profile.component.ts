import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 @Input() user : User ;
 url ='' ;  
  constructor(
    private userServices :UserService
  ) { }
// UPDATE user profile photo 
  onSelectFile(event){
    
    if(event.target.files && event.target.files[0]){
    var reader = new FileReader() ; 
    reader.readAsDataURL(event.target.files[0]) ; 
    reader.onload = (event : any) =>{
      this.url = event.target.result;
       const updatedData = {
        "image": this.url
      }
      this.userServices.updateUserData(updatedData).subscribe(
        ()=>{
          
        }
        ,(error)=>{
          console.log(error)
        }
      ) 
     
    } 
  }
  }

  ngOnInit() {
    
  }

}
