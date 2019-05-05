import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package-track',
  templateUrl: './package-track.component.html',
  styleUrls: ['./package-track.component.scss']
})
export class PackageTrackComponent implements OnInit {
 state={
   pending:true , 
   shipped:true, 
   done:false , 
 }
  constructor() { }

  ngOnInit() {
  }
  
  styleTrackbar(state:string){
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
