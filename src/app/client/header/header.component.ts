import { Component, OnInit, OnDestroy, OnChanges, Input } from "@angular/core";

import { Subscription, fromEvent } from "rxjs";
import { SignOutServices } from "@app/Authentucation/signin-page/auth/signOut.service";
import { SigninAuthService } from "@app/Authentucation/signin-page/auth/signin-auth.service";
import { UserService } from "../core/services/user.service";
import { User } from "../core/models/user.model";
import { delay } from "q";

@Component({
  selector: "app-client-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy, OnChanges {
  ngOnChanges() {}

  show: boolean = false;

  @Input() user: User;

  // info: any;
  ///unsub: Subscription;

  constructor(
    //private authService: SigninAuthService ,
    private signOut: SignOutServices,
    private userService: UserService
  ) {}

  ngOnInit() {
    //  const popupClose = fromEvent(document , 'click') ;
    //       popupClose.subscribe(()=>{
    //        console.log("44")
    //       })
  }

  ngOnDestroy() {}

  showop() {
    this.show = !this.show;
  }
  onSignOut() {
    this.show = !this.show;
    this.signOut.signOut();
  }
}
