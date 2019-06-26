import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/user.model';
import { ClientPackagesService } from '../core/services/client-packages.service';
import { Keys } from 'src/Keys';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit  {
  
  constructor(private router :Router , 
    private userService :UserService ,
    private packagesService :ClientPackagesService
  

    ) { }
   @Output() user:User ; 
    showSpinner:boolean = false;
  showNav:boolean =true ;
  show(){
    this.showNav = ! this.showNav ; 
   
  }
  ngOnInit() {

    
   //To prevent app crash while refreash th page 
    
      this.showSpinner=true ;
      this.userService.getUserData().subscribe(respnse=>{
        this.showSpinner=false;
        console.log(respnse);
      const currentUser  = new User(respnse) ;
      this.userService.user = currentUser ; 
      this.packagesService.setUser();
      console.log(currentUser);
      this.user=currentUser ;
       
    }
      )
    
    this.router.navigate(['/main/deliveries']);
  }

  
  

}
