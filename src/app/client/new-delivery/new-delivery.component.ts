import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientPackagesService } from '../core/services/client-packages.service';

@Component({
  selector: 'app-new-delivery',
  templateUrl: './new-delivery.component.html',
  styleUrls: ['./new-delivery.component.scss']
})
export class NewDeliveryComponent implements OnInit {

  constructor( private  packageServer : ClientPackagesService) { }

  ngOnInit() {
    
  }
  postOrder(form:NgForm){ 
   const newPackage  = {
    to_person:form.value.recipientName,
    to_place:form.value.recipientAddress ,
    from_place:form.value.pickingLocation ,
    note:form.value.note ,
    time_day:form.value.duration,
    offer_money:form.value.cost,
    weight:form.value.packageWeight,
    time_hours: '0' ,
    time_minutes:'0'
   }
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
  
}
