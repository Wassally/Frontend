import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component'; 
// import { LandingpageModule } from '../landingpage/landingpage.module';
import { FooterModule } from '../shared/modules/footer.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SigninAuthService } from './auth/signin-auth.service';


@NgModule({
  declarations: [SigninComponent ,],

  imports: [
    CommonModule
    ,FooterModule,
    FormsModule,
    HttpClientModule 
      
  ] , 
  providers:[SigninAuthService]
})
export class SigninPageModule { }
