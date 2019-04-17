import { Component, OnInit, OnDestroy } from '@angular/core';
import { SigninAuthService } from '@app/signin-page/auth/signin-auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  info: any;
  unsub: Subscription;

  constructor(private authService: SigninAuthService) { }

  ngOnInit() {
    this.unsub = this.authService.userAuth.subscribe(info => {
      this.info = info;
    })
  }

  ngOnDestroy() {
    this.unsub.unsubscribe();
  }

}
