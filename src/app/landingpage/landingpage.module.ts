import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';
import { LandingMainComponent } from './landing-main/landing-main.component';
import { LandingheaderComponent } from './landingheader/landingheader.component';
import { LandingServicesComponent } from './landing-services/landing-services.component';
// import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { FooterModule } from '../shared/modules/footer.module';
import { SigninComponent } from '@app/Authentucation/signin-page/signin/signin.component';
import { SignupPageComponent } from '@app/Authentucation/signup/signup-page/signup-page.component';
import { SigninPageModule } from '@app/Authentucation/signin-page/signin-page.module';
import { SignupModule } from '@app/Authentucation/signup/signup.module';


const landingRoutes: Routes = [
  {
    path: '',
    component: LandingMainComponent
  } , 
  {
    path:'signin' , 
    component : SigninComponent
  },
  {
    path :'signup' , 
    component: SignupPageComponent
  }

]

@NgModule({
  declarations: [
    LandingNavbarComponent,
    LandingMainComponent,
    LandingheaderComponent,
    LandingServicesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(landingRoutes) ,
    SigninPageModule,
    FooterModule,
    SignupModule
    

  ]
})
export class LandingpageModule { }
