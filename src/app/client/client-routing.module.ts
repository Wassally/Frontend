import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router' ; 
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

const clientRouter : Routes =[
    {
       path: '' , 
       component: MainComponent 
    },
    
]
 



@NgModule({
    imports:[RouterModule.forChild(clientRouter)] , 
    exports: [RouterModule]
})  



export class clientRoutingModule{

}