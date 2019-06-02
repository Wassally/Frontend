/**
 * new Delevery model   from UI to server 
 * this model is for the api request 
   *get data from View Form and assign it to the model  
 * 
 */

export class NewDelivery{
public to_governate :string ;
public to_city :string ;
public to_address :string ;
public from_governate :string ;
public from_city :string ;
public from_address :string ;
public receiver_name :string ;
public receiver_phone_number:number ;
public duration:number ;
public weight:number ;
public note:string ;
public transport_way :string ; 
public transportation :string;
public cost_estimation :number ;
public to_location:any;
public from_location :any ;
public sender_phone_number:number ;


constructor(
newPackage :any 
){
 this.to_governate = newPackage.to_governate ;
 this.to_city = newPackage.to_city ;
 this.to_address = newPackage.to_address ;
 this.from_governate = newPackage.from_governate ;
 this.from_city = newPackage.from_city ;
 this.from_address = newPackage.from_address ;
 this.receiver_name = newPackage.receiver_name;
 this.receiver_phone_number = newPackage.receiver_phone_number ;
 this.duration = newPackage.duration  ; 
 this.weight = newPackage.weight;   


 this.transport_way = newPackage.transport_way  ; 
 this.transportation = newPackage.transportation  ;
 this.cost_estimation = newPackage.cost_estimation  ;
 this.sender_phone_number = 252518 ;
 /**
  * location from map 
  * now its a default  and will comming soon  after implement the Google Map 
  */
 this.to_location ={
    "latitude":  "40.733362" ,
    "longitude": "-74.188435"
 }
 this.from_location = {
    "latitude":  "40.733362"  ,
    "longitude": "-74.188435"
 }


}







} 