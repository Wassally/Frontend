import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router' ; 
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { PackagesComponent } from './packages/packages.component';
import { CaptinProfileComponent } from './captin-profile/captin-profile.component';
import { NewDeliveryComponent } from './new-delivery/new-delivery.component';
import { AuthGuard } from '@app/signin-page/auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

const clientRouter : Routes =[
    {

        path: '' , 
       component: MainComponent  , 
      canActivateChild :[AuthGuard] ,
       children :[
           {
               path : 'deliveries' , 
               component : DeliveriesComponent
           }, 
           
           {
            path: 'deliveries/:id' , 
            component: PackagesComponent , 
            children:[]} ,
            {
                path:'deliveries/:id/captin' , 
                component:CaptinProfileComponent
            },
            {
                path : 'newDelivery' , 
                component : NewDeliveryComponent
            } , 
            {
                path : 'profile'  , 
                component : ProfileComponent
            } ,
            {
                path : 'profile/editProfile'  , 
                component : EditProfileComponent
            }

         
       ]

    },
    
]
 



@NgModule({
    imports:[RouterModule.forChild(clientRouter)] , 
    exports: [RouterModule]
})  



export class clientRoutingModule{

}