import { Component, OnInit, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ClientPackagesService } from "@app/client/core/services/client-packages.service";
import { Package } from "@app/client/core/models/package.model";

@Component({
  selector: "app-search-track",
  templateUrl: "./search-track.component.html",
  styleUrls: ["./search-track.component.scss"]
})
export class SearchTrackComponent implements OnInit {
  @Output() Package: Package;
  showTrack = false;
  searchError = false;

  constructor(private packageService: ClientPackagesService) {}

  ngOnInit() {}

  search(f: NgForm) {
    const searchValue = f.form.value.search;

    this.packageService.getPackageById(searchValue).subscribe(
      r => {
        const Rpackage = new Package(r);
        this.Package = Rpackage;
        this.showTrack = true;
        this.searchError = false;
      },
      () => {
        this.showTrack = false;
        this.searchError = true;
      }
    );
  }
}
