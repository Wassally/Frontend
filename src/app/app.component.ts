import { Component } from '@angular/core';
import { Keys } from 'src/Keys';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  apikey= `https://maps.googleapis.com/maps/api/js?key=${Keys.googleMapApi}&libraries=places&language=en`
}
