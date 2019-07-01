import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/user.model';
import { MapService } from '../core/services/map.service';
import { NgForm } from '@angular/forms';
import { ClientAddressService } from '../core/services/client-address.service';
import { Subscription } from 'rxjs';





@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit {
  constructor(
    private userServices :UserService , 
    private mapService : MapService , 
    private clientLocations : ClientAddressService , 
     
    
  ) { }
  subscription :Subscription
  user : User =this.userServices.user ;
  url ='' ;
  address= this.clientLocations.getUserAddress()//array of user address
 
 /**
  * Every address Stored with uniqe id  so we want the id of selected addddress
  *   Address Id we want to delete Or update
  */
  addressId : number ;
  
   
  
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

  ngOnInit() {
    //subscripe To Map changes 
      this.mapService.sharedLocation.subscribe((loc:any)=>{
      this.Address.location.latitude= loc.location.lat;
      this.Address.location.longitude= loc.location.lng;
      this.Address.formated_address=loc.forrmatted_address;
      

    }) ; 
   this.userServices.getUserData().subscribe((r:User) => this.userServices.user=r )
}
//update Address 


Address =
{
  "location":   {
 
    "latitude":20 , 
    "longitude":20  
    } , 
    "formated_address":"Not Assigned" ,
    "address_description": "Not Assigned"
} 

  

//mode delete - update create Address 
openMap=false;
newAddressMode = false ; 
editAddressMode = false;
/** 
*Edit Modde
*Edit Address Save id and user it when submiting 
 
 */
editHomeAddress(id : number){
  this.openMap=!this.openMap ;
  this.addressId=id;
  this.editAddressMode = true;
  this.newAddressMode = false ; 
 
}
 // create  New Adddress 

addAddress(){
  this.openMap=!this.openMap ; 
  this.editAddressMode = false;
  this.newAddressMode = true; 
 

}
 /**
  * Update or Create Address  according to the mode
  * if edit Mode Use Patch and get the id
  *  if new just pass the Address with no filed 
  */
updateAddress(form:NgForm){
  this.Address.address_description=form.value.restaddress;
  if(this.editAddressMode){
  this.clientLocations.updateUserLocation( this.addressId
     , this.Address).subscribe(
    (res)=>{
      console.log(res);
      this.openMap=false ;
      this.editAddressMode = false;
      this.updateUserAdddress() ;
      location.reload();
    },(error)=>{
      console.log(error)
     }
  )}
  if(this.newAddressMode){
    this.clientLocations.AddUserLocation(this.Address).subscribe(
      ()=>{
        this.newAddressMode = false;
        this.openMap=false ;
        this.updateUserAdddress() ;
        location.reload();


      }
    )
  }
  
}
/**
 * 
 * Delete By id 
 */
deleteAddress(id:number){
  this.clientLocations.deleteUserLocation( id ).subscribe(
    ()=>{
      this.updateUserAdddress() ;
      location.reload();
    },(error)=>{
      console.log(error)
     }
  )
  
}
/**
 * function to update when crashend 
 */
updateUserAdddress(){
  this.userServices.getUserData().subscribe(
    ()=>{
    this.address=this.clientLocations.getUserAddress() ;
  })
}



}


