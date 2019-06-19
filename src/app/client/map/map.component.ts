import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }
  lat: number = 26.77580395481242;
  lng: number =32.35276413720135;
  onMapClick(event){
    console.log(event);
    this.lng=event.coords.lng; 
    this.lat = event.coords.lat; 
  }
  ngOnInit() {
  }

}
