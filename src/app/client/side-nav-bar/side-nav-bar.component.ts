import { Component, OnInit } from "@angular/core";
import { ClientPackagesService } from "../core/services/client-packages.service";
import { Package } from "../core/models/package.model";
import { Router } from "@angular/router";

@Component({
  selector: "client-side-nav-bar",
  templateUrl: "./side-nav-bar.component.html",
  styleUrls: ["./side-nav-bar.component.scss"]
})
export class SideNavBarComponent implements OnInit {
  constructor(
    private PackageServices: ClientPackagesService,
    private router: Router
  ) {}
  filterType: string = null;

  update() {
    this.PackageServices.getAllPackage().subscribe(res => {
      this.PackageServices.setPackages(res, false);
    });
  }

  runFilter(filterParameter: string) {
    this.PackageServices.filterMode = true;
    this.filterType = filterParameter;
    this.PackageServices.filter(filterParameter).subscribe(
      (res: any) => {
        this.PackageServices.setPackages(res, true);
        this.PackageServices.displayedPackages = [];
        res.forEach((el, i) => {
          this.PackageServices.displayedPackages[i] = new Package(el);
        });
        console.log(this.PackageServices.displayedPackages);

        this.router.navigate(["/main/delivered"]);
      },
      err => console.log(err)
    );
  }

  ngOnInit() {}

  changeMode() {
    this.PackageServices.filterMode = false;
    this.filterType = null;
  }

  activeRouter(param) {
    let active = false;
    if (param == "on_way") {
      if (this.filterType == "on_way") active = true;
    }
    if (param == "delivered") {
      if (this.filterType == "delivered") active = true;
    }

    if (param == "waiting") {
      if (this.filterType == "waiting") active = true;
    }
    if (param == "pending") {
      if (this.filterType == "pending") active = true;
    }

    return { Sub_activeNav: active };
  }
}
