import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  }) 
  
export class SignOutServices{
    constructor(
        private router: Router
    ){

    }
    signOut(){
        debugger;
        localStorage.removeItem('token') ;
        localStorage.removeItem('user') ;  
        this.router.navigate(['/signin']);
        
    }
}

