import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/user.model';
import { MapService } from '../core/services/map.service';
import { NgForm } from '@angular/forms';





@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit {
  
  user : User =this.userServices.user ;
 url ='' ;
   
  constructor(
    private userServices :UserService , 
    private mapService : MapService , 
    
  ) { }
// UPDATE user profile photo 
  onSelectFile(event){
    
    if(event.target.files && event.target.files[0]){
    var reader = new FileReader() ; 
    reader.readAsDataURL(event.target.files[0]) ; 
    reader.onload = (event : any) =>{
      const newImage = event.target.result;
      this.userServices.user.image = newImage ;
       const updatedData = {
        "image": newImage
      }
      this.userServices.updateUserData(updatedData).subscribe(
        ()=>{
          console.log("done")
        }
        ,(error)=>{
          console.log(error)
        }
      ) 
     
    } 
  }
  }
//update Address 
Address =
{
  "location":   {
 
    "latitude":20 , 
    "longitude":20  
    } , 
    "formated_address":"d" ,
    "address_description": "d"
} 

  


editAddress=false;

editHomeAddress(){
  this.editAddress=!this.editAddress ;
}
 



ngOnInit() {
    this.mapService.sharedLocation.subscribe((loc:any)=>{
     
      this.Address.location.latitude= loc.location.lat;
      this.Address.location.longitude= loc.location.lng;
      this.Address.formated_address=loc.forrmatted_address;
      console.log(this.Address) ;

    })
}

updateAddress(form:NgForm){
  this.Address.address_description=form.value.restaddress;
  this.userServices.updateUserLocation(this.Address).subscribe(
    (res)=>{
      console.log(res);
      this.editAddress=false ; 
    },(error)=>{
      console.log(error)
     }
  )
  
}

  }


