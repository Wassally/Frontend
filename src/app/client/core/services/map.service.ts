import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Map service return Observable of location 
 *  map component call mapService send the new location 
 * subscribe to observabe where we want use the map ang get new location when it changes  
 *  
 */


export class MapService {
  //default class to Behavior 
      address={
        location : {
        lat:20 , 
        lng:20  
        } , 
        forrmatted_address: 'default ' 
      
      }
// Behavior listen to the change in map 
      private newLocation = new BehaviorSubject<any>(this.address) ; 
      sharedLocation = this.newLocation.asObservable() ;


  constructor() { }

//method recive the update from map component and assign to the new  Location observable 
  getAddress(addr:any){
    this.address.location.lat = addr.location.lat ; 
    this.address.location.lng = addr.location.lng ; 
    this.address.forrmatted_address = addr.forrmatted_address ; 
  
    this.newLocation.next(this.address) ;
    
  }
}
