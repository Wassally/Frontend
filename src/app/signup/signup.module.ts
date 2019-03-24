import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { FooterModule } from "@app/shared/modules/footer.module"
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupService } from './signup-services.service';

@NgModule({
  declarations: [SignupPageComponent],
  imports: [
    CommonModule,
    FooterModule,
    FormsModule,
    HttpClientModule 
  ] , 
  providers:[SignupService]
})
export class SignupModule { }
