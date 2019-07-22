import { Component, OnInit, Input } from '@angular/core';
import { ClientPackagesService } from '@app/client/core/services/client-packages.service';
import { Package } from '@app/client/core/models/package.model';

@Component({
  selector: 'app-package-track',
  templateUrl: './package-track.component.html',
  styleUrls: ['./package-track.component.scss']
})
export class PackageTrackComponent implements OnInit {
 @Input() Package : Package ; 
 
  state={
   waiting:false, 
   pending:false, 
   shipped:false, 
   done:false , 
 }
  constructor(
  
  ) { }

  ngOnInit() {
    console.log(this.Package.delivery_state.type);
   
    
 if (this.Package.delivery_state.type == 'pending'){

    this.state.pending=true ; 
  }

   else if( this.Package.delivery_state.type == "On way"){
    this.state.pending=true ;
    this.state.shipped = true ;  

  }
  else if( this.Package.delivery_state.type == "delivered"){
    this.state.pending=true ;
    this.state.shipped = true ; 
    this.state.done = true ; 

  }

  }
  
  styleTrackbar(state:string){
    let fill = false ; 
    if(state == "pending") {
        if(this.state.pending) fill = true ;
    } 
    if(state == "on-way") {
      if(this.state.shipped) fill = true ;
  } 
  if(state == "delivered") {
    if(this.state.done) fill = true ;
} 
    
    return { 
      'track__Progress--state-bar' :true,
      'track__Progress--state-barFill' :fill
    }
  } 
  styleTrackmark(state:string){
    let fill = false ; 
    if(state == "pending") {
        if(this.state.pending) fill = true ;
    } 
    if(state == "on-way") {
      if(this.state.shipped) fill = true ;
  } 
  if(state == "delivered") {
    if(this.state.done) fill = true ;
} 
   
   
    return { 
      'track__Progress--state-mark' :true,
      'track__Progress--state-markFill' :fill
    }
  } 

}
