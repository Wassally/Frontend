import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { SigninAuthService } from "../auth/signin-auth.service";
import { Router } from "@angular/router";
import { UserService } from "@app/client/core/services/user.service";
import { ClientPackagesService } from "@app/client/core/services/client-packages.service";
import { User } from "@app/client/core/models/user.model";
import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  invalidLogIn = false;

  constructor(
    private signinAuth: SigninAuthService,
    private router: Router,
    private userService: UserService,
    private packagesService: ClientPackagesService
  ) {}

  /**
   *
   * Sign in
   * get data  from input and pass it to sign in service
   * subscribe for responce
   */
  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.signinAuth.signIn({ username: email, password: password }).subscribe(
      (user: {
        auth_token: string;
        email: string;
        name: string;
        user_id: number;
      }) => {
        this.invalidLogIn = false; //No error Message to user
        // store  Token in local Storage for authentication
        localStorage.setItem("token", user.auth_token);
        this.userService.id = user.user_id;
        //navigate To home
        this.router.navigate(["/main/deliveries"]);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        // if Authentication Error
        if (error.status == 400) {
          this.invalidLogIn = true;
        } else {
          location.reload();
        }
      }
    );
  }
  ngOnInit() {}
}
