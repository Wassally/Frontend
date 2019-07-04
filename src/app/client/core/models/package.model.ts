import { IfStmt } from '@angular/compiler';

/**
 * User Package Model (user packages that return from api )
  *   
 */

export class Package{
  

  id: number ;
  created_at: Date ; 
  duration: number ; 
  delivery_state: {
    type : string , 
          description : string, 
          img :string 
  } ;
  owner: number ;
  sender_phone_number:  string ;
  receiver_name:  string ;
  receiver_phone_number:  string ;
  time_since: string ;
  updated_at:  string ;
  wassally_salary: number ;
  weight: number ;
  note:  string ;
  captain_name:string; 
  state: string;
  package_address:{
     from_address:{
          id: number,
          location: {
            latitude: number 
            longitude: number
          } ,
          formated_address: string,
          address_description: string
    }
     to_address: {
          id: number, 
          formated_address: string, 
          location: {
            latitude: number 
            longitude: number
          } ,
          address_description: string}
  }


     constructor(userPackage?:any){
      this.id=userPackage.id ; 
      this.created_at=userPackage.created_at  ; 
      this.duration=userPackage. duration ; 
    
      this.owner=userPackage.owner  ;
      this.sender_phone_number=userPackage.sender_phone_number  ;
      this.receiver_name=userPackage.receiver_name  ;
      this.receiver_phone_number=userPackage.receiver_phone_number  ;
      this.time_since=userPackage.time_since ;
      this.updated_at=userPackage.updated_at  ;
      this.wassally_salary=userPackage.wassally_salary  ;
      this.weight=userPackage.weight ;
      this.note=userPackage.note  ;
     this.captain_name=userPackage.captain_name;
     this.delivery_state = userPackage.delivery_state ; 
     this.package_address = userPackage.package_address;

      if(userPackage.state == "waiting"){
        this.delivery_state =  {
          type : "waiting"  , 
          description : "Your Package is scucefully created, we will be in touch with you soon" , 
          img : "assets/img/client/package/packageState/waiting.png"
        }
      }else if(userPackage.delivery_state == "pending"){
        this.delivery_state =  {
          type : "pending"  , 
          description : "captin just took package from you , we will inform you when he is ready to go " , 
          img : "assets/img/client/package/packageState/pending.png"
        }

      }else if(userPackage.delivery_state == "delivered"){
        this.delivery_state =  {
          type : "delivered"  , 
          description : "your package has been successfuly delivered !" , 
          img : "assets/img/client/package/packageState/delivered.png"
        }

      }else if(userPackage.delivery_state == "on_way"){
        this.delivery_state =  {
          type : "On way"  , 
          description : "captin is ready to go , he is on way" , 
          img : "assets/img/client/package/packageState/onway.png"
        }
      } else {
        this.delivery_state =  {
          type : "waiting"  , 
          description : "Your Package is scucefully created, we will be in touch with you soon" , 
          img : "assets/img/client/package/packageState/waiting.png"
        }
        
      }

     }

    

}