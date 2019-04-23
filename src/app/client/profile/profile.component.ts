import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../modeles/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 @Input() user : User ;
 url ='' ;  
  constructor(
    private userServices :UserService
  ) { }

  onSelectFile(event){
    console.log(event) ;
    if(event.target.files && event.target.files[0]){
    var reader = new FileReader() ; 
    reader.readAsDataURL(event.target.files[0]) ; 
    reader.onload = (event : any) =>{
      this.url = event.target.result; 
      console.log(this.url) ;
    } 
  }
  }

  ngOnInit() {
    
  }

}
