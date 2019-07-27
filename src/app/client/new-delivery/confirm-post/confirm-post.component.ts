import { Component, OnInit } from "@angular/core";
import { ClientPackagesService } from "@app/client/core/services/client-packages.service";
import { APIService } from "@app/client/core/services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-confirm-post",
  templateUrl: "./confirm-post.component.html",
  styleUrls: ["./confirm-post.component.scss"]
})
export class ConfirmPostComponent implements OnInit {
  cost: number;
  package: any;
  constructor(
    private PackageService: ClientPackagesService,
    private apiServerice: APIService,
    private route: Router
  ) {}

  ngOnInit() {
    this.cost = this.PackageService.returnPrice();
    this.PackageService.setPrice(null);
    this.package = this.PackageService.newCreatedPackage;
  }
  ConfirmShippment() {
    const NewPackage = this.PackageService.newCreatedPackage;
    this.PackageService.postPackage(NewPackage).subscribe(r => {
      this.route.navigate(["main/deliveries"]);
    });
  }
}
