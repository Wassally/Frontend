import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';
import { LandingMainComponent } from './landing-main/landing-main.component';
import { LandingheaderComponent } from './landingheader/landingheader.component';
import { LandingServicesComponent } from './landing-services/landing-services.component';
// import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { SigninComponent } from '../signin-page/signin/signin.component';
import { SigninPageModule } from '../signin-page/signin-page.module';
import { FooterModule } from '../shared/modules/footer.module';
import { SignupPageComponent } from '../signup/signup-page/signup-page.component';
import { SignupModule } from '../signup/signup.module';

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
