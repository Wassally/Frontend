/**
 * User Package Model (user packages that return from api )
  *   
 */

export class Package{
 

  id: number ;
  created_at: Date ; 
  duration: number ; 
  state: string ;
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
  delivery_state: string;
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
      this.state=userPackage.state  ;
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

     }

    

}