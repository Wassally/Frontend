import { Component, OnInit, OnDestroy } from '@angular/core';
import { SigninAuthService } from '@app/signin-page/auth/signin-auth.service';
import { Subscription } from 'rxjs';
import { SignOutServices } from '@app/signin-page/auth/signOut.service';

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
