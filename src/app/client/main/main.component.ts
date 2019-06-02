import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/user.model';
import { ClientPackagesService } from '../core/services/client-packages.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router :Router , 
    private userService :UserService ,
    private packagesService :ClientPackagesService
  

    ) { }
  showNav:boolean =true;
  show(){
    this.showNav = ! this.showNav ; 
  }
  ngOnInit() {

    
   //To prevent app crash while refreash th page 
    if(!this.userService.user){
      this.userService.getUserData().subscribe(respnse=>{
      const currentUser  = new User(respnse) ;
      this.userService.user = currentUser ; 
      this.packagesService.setUser();
       
    }
      )
    }
    this.router.navigate(['/main/deliveries']);
  }


}
