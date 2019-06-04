import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { clientRoutingModule } from './client-routing.module';
import { MainComponent } from './main/main.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { PackagesComponent } from './packages/packages.component';
import { CaptinProfileComponent } from './captin-profile/captin-profile.component';
import { NewDeliveryComponent } from './new-delivery/new-delivery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { HeaderInterceptor } from './core/interceptors/http.header.interceptor';
import { TrackComponent } from './track/track.component';
import { SearchTrackComponent } from './track/search-track/search-track.component';
import { PackageTrackComponent } from './track/package-track/package-track.component';
import { MatrialDesignModule } from '@app/shared/modules/matrial-design.module';




@NgModule({
  declarations: [HeaderComponent, MainComponent, SideNavBarComponent, DeliveriesComponent, PackagesComponent, CaptinProfileComponent, NewDeliveryComponent, ProfileComponent, EditProfileComponent, TrackComponent, SearchTrackComponent, PackageTrackComponent 
  ],
  imports: [
    CommonModule ,
    clientRoutingModule , 
    FormsModule ,
    HttpClientModule ,
    MatrialDesignModule , 
    ReactiveFormsModule
  ] , 
  providers:[
    {
      provide:HTTP_INTERCEPTORS , useClass:HeaderInterceptor , multi: true 
    }
  ]
})
export class ClientModule { }
