import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { UserService } from './user.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientAddressService {

  constructor(
    private apiService  : APIService , 
    private userServices : UserService 
  ) { }
/**
 * Address From profile Page 
 * Address updated by api Delete 
 * Address deleted by api delete 
 * Address created by api post 
 * Patch and Delete need id 
 */
  
  getUserAddress(){
      return this.userServices.user.userAddress ; 
  }

  AddUserLocation(updatedLocation:any){
    const path = `/clientaddress/`;
    return this.apiService.post(path , updatedLocation)
  }
 
  updateUserLocation( addressId:number , updatedLocation:any){
    
    const path = `/clientaddress/${addressId}/`;
    return this.apiService.patch(path , updatedLocation)
  }
  deleteUserLocation(addressId:number){
    const path = `/clientaddress/${addressId}/`;
    return this.apiService.delete(path)
  }


}
