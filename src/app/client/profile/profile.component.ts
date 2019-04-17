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
  constructor(
    private userServices :UserService
  ) { }

  ngOnInit() {
    
  }

}
