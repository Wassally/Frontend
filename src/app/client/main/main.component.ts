import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../modeles/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router :Router , 
    private userService :UserService) { }
  showNav:boolean =true;
  show(){
    this.showNav = ! this.showNav ; 
  }
  ngOnInit() {

    
    this.router.navigate(['/main/deliveries']);
  }


}
