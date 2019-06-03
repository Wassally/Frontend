import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './shared/components/alert.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './client/core/interceptors/http.header.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule ,
    HttpClientModule,
    BrowserAnimationsModule  , 
     
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS , useClass:HeaderInterceptor , multi: true 
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
