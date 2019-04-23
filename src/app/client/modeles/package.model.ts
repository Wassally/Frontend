import { Time } from '@angular/common';

export class Package{
    packageNumber  : number ;
    Reciver : string ; 
    destinationAddress: string ; 
    sourceAddress : string ; 
    packageState : string ; 
    note:string ;
    max_duration : number ;
    weight: number ;
    createdDate:string ;
    relatedoffers:[] ;
    relatedoffersCoumt :number ;
    captin:{
        id : number, 
      name : string ,
      imageUrl:string,
      rate: number ; 
    }
     constructor(userPackage?:any){
        this.packageNumber=userPackage.id ;
        this.Reciver=userPackage.to_person;
        this.destinationAddress=userPackage.to_place;
        this.sourceAddress=userPackage.from_place;
        this.packageState=userPackage.state;
        this.note=userPackage.note;
        this.max_duration=userPackage.time_day;
        this.weight=userPackage.weight;
        this.createdDate=userPackage.created_at;
        this.relatedoffersCoumt=userPackage.related_offers.length;
        this.relatedoffers=userPackage.related_offers;
        
        
     }

    

}