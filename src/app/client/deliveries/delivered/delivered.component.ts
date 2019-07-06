import { Component, OnInit, Output } from '@angular/core';
import { ClientPackagesService } from '@app/client/core/services/client-packages.service';

@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.scss']
})
export class DeliveredComponent implements OnInit {

  constructor( private PackageService : ClientPackagesService) { }
// @Output() filterdPackages  = this.PackageService.displayedPackages;
  ngOnInit() {
  }

}
