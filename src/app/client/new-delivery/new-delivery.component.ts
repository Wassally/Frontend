import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientPackagesService } from '../core/services/client-packages.service';
import { NewDelivery } from '../core/models/newDelivery.model';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-new-delivery',
  templateUrl: './new-delivery.component.html',
  styleUrls: ['./new-delivery.component.scss']
})
export class NewDeliveryComponent implements OnInit {

  constructor( private  packageServer : ClientPackagesService) { }
  email = new FormControl('', [Validators.required, Validators.email]);
  ngOnInit() {
    
  }
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
     console.log('package Created successfuly')
   } ,
   (error)=>{
     console.log(error)
   }
    );

  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  
}
