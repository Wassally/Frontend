import { Component } from '@angular/core';


@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.scss']
})
export class LandingNavbarComponent {

  classes = {
    'navbar-collapse': true,
    collapse: true,
    show: false
  };


  toggleCollapse() {
    this.classes.show = !this.classes.show;
  }

}
