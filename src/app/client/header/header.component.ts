import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { SignOutServices } from '@app/Authentucation/signin-page/auth/signOut.service';
import { SigninAuthService } from '@app/Authentucation/signin-page/auth/signin-auth.service';


@Component({
  selector: 'app-client-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  show:boolean = false ; 
  info: any;
  unsub: Subscription;

  constructor(private authService: SigninAuthService , 
    private signOut : SignOutServices
    ) { }

  ngOnInit() {
    this.unsub = this.authService.userAuth.subscribe(info => {
      this.info = info;
    })
  }

  ngOnDestroy() {
    this.unsub.unsubscribe();
  }

  showop(){
    this.show = !this.show ; 
    
  }
  onSignOut(){
    this.signOut.signOut();
  }

   



}
