import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input' ; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatAutocompleteModule} from '@angular/material/autocomplete';




@NgModule({
  declarations: [
    
  ],
  imports: [
     
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule , 
    MatProgressSpinnerModule , 
    MatAutocompleteModule ,
   
    


    
  ] , 
  exports:[
    MatFormFieldModule,
    MatButtonModule , 
    MatProgressSpinnerModule , 
    MatAutocompleteModule , 
    
  ]
})
export class MatrialDesignModule { }
