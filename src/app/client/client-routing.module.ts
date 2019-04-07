import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router' ; 
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';

const clientRouter : Routes =[
    {

        path: '' , 
       component: MainComponent  , 
       children :[
           {
               path : 'deliveries' , 
               component : DeliveriesComponent
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