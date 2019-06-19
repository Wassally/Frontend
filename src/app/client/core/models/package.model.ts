/**
 * User Package Model (user packages that return from api )
  *   
 */

export class Package{
  // public packageNumber:number ;
  // public  destinationAddress :string  ; 
  // public toAddress: string ; 
  // public Reciver :string ;
  // public receiver_phone_number:number ;
  // public max_duration :number ;
  // public weight:number ;
  // public note:string ;
  // public createdDate : Date ; 
  // public packageState :string ; 
  // public relatedoffers :number ; 
  // public relatedoffersCoumt:  number ; 
  // public to_city :string ;
  // public to_address :string ;
  // public to_location:any;
  // public from_governate :string ;
  // public from_city :string ;
  // public from_address :string ;
 
  //public from_location :any ;
  //public sender_phone_number:number ;


  id: number ;
  created_at: Date ; 
  duration: number ; 
  state: string ;
  owner: number ;
  sender_address: string ;
  sender_city:  string ;
  sender_governate:  string ;
  sender_phone_number:  string ;
  receiver_name:  string ;
  receiver_phone_number:  string ;
  receive_address:  string ;
  receive_city:  string ;
  receive_governate:  string ;
  time_since: string ;
  updated_at:  string ;
  wassally_salary: number ;
  weight: number ;
  transport_way:  string ;
  note:  string ;
  sender_location: {
    latitude: number, 
    longitude: number
  } ; 
  receive_location: {
    latitude: number, 
    longitude: number
  };

     constructor(userPackage?:any){
      this.id=userPackage.id ; 
      this.created_at=userPackage.created_at  ; 
      this.duration=userPackage. duration ; 
      this.state=userPackage.state  ;
      this.owner=userPackage.owner  ;
      this.sender_address=userPackage.from_address ;
      this.sender_city=userPackage.from_city  ;
      this.sender_governate=userPackage.from_governate  ;
      this.sender_phone_number=userPackage.sender_phone_number  ;
      this.receiver_name=userPackage.receiver_name  ;
      this.receiver_phone_number=userPackage.receiver_phone_number  ;
      this.receive_address=userPackage.to_address  ;
      this.receive_city=userPackage.to_city  ;
      this.receive_governate=userPackage.to_governate  ;
      this.time_since=userPackage.time_since ;
      this.updated_at=userPackage.updated_at  ;
      this.wassally_salary=userPackage.wassally_salary  ;
      this.weight=userPackage.weight ;
      this.transport_way=userPackage.transport_way  ;
      this.note=userPackage.note  ;   
        
     }

    

}