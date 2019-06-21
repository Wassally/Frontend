import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientPackagesService } from '../core/services/client-packages.service';
import { NewDelivery } from '../core/models/newDelivery.model';
import { MapService } from '../core/services/map.service';


@Component({
  selector: 'app-new-delivery',
  templateUrl: './new-delivery.component.html',
  styleUrls: ['./new-delivery.component.scss']
})
export class NewDeliveryComponent implements OnInit {
/**
 * object of  Address  with default location 
 * formated Address the address from google map
 * restaddress bulding number and floor number , street number   
 */
  sourceAddress={
    location: 
        {
         
          lat:26.77580395481242 , 
          lng:32.35276413720135  
        } , 
    forrmatted_address:'default' ,
    restaddress: 'default str 1 '
  }
  destinationAddress={
    location: 
        {
         lat:26.77580395481242 , 
          lng:32.35276413720135  
        } , 
    forrmatted_address:'default' ,
    restaddress: 'default str 2'
  }
  // create package  steps 
  sourceSection : boolean = true ; 
  destinationSection:boolean=false ; 
  otherDetailesSection:boolean=false ; 

  constructor(
     private  packageServer : ClientPackagesService , 
    
     private mapService :MapService
     
     
     ) { }
 

               
  ngOnInit() {

    /**
     * Get the location From map Service 
     * Map Return  object of location as an observable 
     */
  
    this.mapService.sharedLocation.subscribe(
      (address :any)=>{
        let that = this ;
        //assign the source location to the sourcelocation object when the user in the From Page  
        if(this.sourceSection){
        
          that.sourceAddress.location.lat = address.location.lat ; 
          that.sourceAddress.location.lng = address.location.lng;
          that.sourceAddress.forrmatted_address = address.forrmatted_address ;

        }
       //assign the destination location to the destinationlocation object when the user in the To Page  

      if(this.destinationSection){
        that.destinationAddress.location.lat = address.location.lat ; 
          that.destinationAddress.location.lng =address.location.lng;
          that.destinationAddress.forrmatted_address =address.forrmatted_address ;
        }

        console.log(this.sourceAddress)

      }
    )
  }
 
// Post the package Send it to server 
  postOrder(form:NgForm){
  
   const fromForm  = {
    from_governate:form.value.from_governate,
    from_city:form.value.from_city ,
    from_address:form.value.from_address ,
    to_governate:form.value.to_governate ,
    to_city:form.value.to_city,
    to_address:form.value.to_address,
    receiver_name:form.value.receiver_name,
    receiver_phone_number:form.value.receiver_phone_number,
    duration:form.value.duration,
    weight:form.value.weight,
    note:form.value.note,
    transportation:form.value.transportation,
    cost_estimation:form.value.cost_estimation,
    transport_way:"wassally",
   }
   const newPackage= new NewDelivery(fromForm)

   console.log (newPackage) ;

   this.packageServer.postPackage(newPackage) 
   .subscribe((Response) => {
     console.log(Response) 
     console.log('package Created successfuly') ; 
    
   } ,
   (error)=>{
     console.log(error)
   }
    );

  }


  /**
   * new package steps 
   */
  openSource(){
    this.sourceSection=true ;
    this.destinationSection=false;
    this.otherDetailesSection=false
  }
  openReciver(){
    this.sourceSection=false ;
    this.destinationSection=true;
    this.otherDetailesSection=false

  }
  openotherDetailes(){
    this.sourceSection=false ;
    this.destinationSection=false;
    this.otherDetailesSection=true;
  }
 
}
