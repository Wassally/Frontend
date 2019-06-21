import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { MapService } from '../core/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  //google auto complete (google place )  inject
  @ViewChild("placesRef") placesRef : GooglePlaceDirective;
  
  //Egypt random cordinate to start the map 
  lat: number = 26.77580395481242;
  lng: number =32.35276413720135;
  
  constructor(
    private mapServicea : MapService
  ) {

   }
  
 //full address from map 
  address={
    location: 
        {
         lat:26.77580395481242 , 
          lng:32.35276413720135  
        } , 
    forrmatted_address:'default' ,
    
  }
 
  // on select locatin from map Directly
  onMapClick(event){
    console.log(event);

    const latitude = event.coords.lng; 
    const longitude = event.coords.lat;
    this.lng= longitude;
    this.lat =  latitude;

    this.address.location.lat= latitude;
    this.address.location.lng= longitude;
    this.mapServicea.getAddress(this.address) ;

  }
  ngOnInit() {
  }
  public handleAddressChange(address: Address) {
    console.log(address)
    const latitude=  address.geometry.location.lat();
    const longitude= address.geometry.location.lng();

    this.lng= longitude;
    this.lat =  latitude;

    this.address.location.lat= latitude;
    this.address.location.lng= longitude;
    this.address.forrmatted_address = address.formatted_address ; 


    this.mapServicea.getAddress(this.address) ;
}
}
