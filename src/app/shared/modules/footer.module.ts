import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingFooterComponent } from 'src/app/landingpage/landing-footer/landing-footer.component';

@NgModule({
  declarations: [
    LandingFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingFooterComponent
  ]
})
export class FooterModule { }
