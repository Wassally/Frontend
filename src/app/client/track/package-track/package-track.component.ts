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
   waiting:true, 
   pending:true, 
   shipped:true, 
   done:true , 
 }
  constructor(
  
  ) { }

  ngOnInit() {
   if( this.Package.delivery_state.type!= "delivered"){
     this.state.done=false ; 
   }
   if( this.Package.delivery_state.type!= "On way"){
    this.state.shipped=false ; 
  }
  if( this.Package.delivery_state.type!= "pending"){
    this.state.pending=false ; 
  }

  }
  
  styleTrackbar(state:string){
    let fill = false ; 
    if(state == "pending") {
        if(this.state.pending) fill = true ;
    } 
    if(state == "On way") {
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
  styleTrackmark(state){
    let fill = false ; 
    if(state == "pending") {
        if(this.state.pending) fill = true ;
    } 
    if(state == "shipped") {
      if(this.state.shipped) fill = true ;
  } 
  if(state == "done") {
    if(this.state.done) fill = true ;
} 
   
   
    return { 
      'track__Progress--state-mark' :true,
      'track__Progress--state-markFill' :fill
    }
  } 

}
