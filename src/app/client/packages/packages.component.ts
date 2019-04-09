import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientPackagesService } from '../client-packages.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  id :number ;
  @Input() package :{
    number : number , 
    To : string ,
    location : string , 
    from : string ,
    state : string ,  
    captin : {
      id : number, 
      name : string ,
      imageUrl:string,
     }


  };
   

  constructor( private roue : ActivatedRoute , 
                private packageService : ClientPackagesService
    ) { }

  ngOnInit() {
    this.roue.params
    .subscribe(
      (params:Params)=>{
        this.id= +params['id'];
        this.package = this.packageService.getpackages(this.id) ;

      }
    )
  }

}
