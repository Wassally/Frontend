import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ClientPackagesService } from "../core/services/client-packages.service";
import { Package } from "../core/models/package.model";

@Component({
  selector: "app-packages",
  templateUrl: "./packages.component.html",
  styleUrls: ["./packages.component.scss"]
})
export class PackagesComponent implements OnInit {
  id: number;
  @Input() package: Package;
  //stateIsPending = false ;

  constructor(
    private roue: ActivatedRoute,
    private packageService: ClientPackagesService
  ) {}

  ngOnInit() {
    this.roue.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.package = this.packageService.getpackage(this.id);
      // if(this.package.state=="pending"){
      // this.stateIsPending=true;
      //}
    });
  }
}
