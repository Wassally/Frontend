import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ClientPackagesService } from "../core/services/client-packages.service";
import { NewDelivery } from "../core/models/newDelivery.model";
import { MapService } from "../core/services/map.service";
import { UserService } from "../core/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-delivery",
  templateUrl: "./new-delivery.component.html",
  styleUrls: ["./new-delivery.component.scss"]
})
export class NewDeliveryComponent implements OnInit {
  /**
   * object of  Address  with default location
   * formated Address the address from google map
   * address_description bulding number and floor number , street number
   */
  constructor(
    private packageServer: ClientPackagesService,

    private mapService: MapService,
    private userService: UserService,
    private route: Router
  ) {}
  createNewPackage = {
    sender_phone_number: "000000",
    receiver_name: "Not assigned",
    receiver_phone_number: "000000",
    note: "no note",
    weight: 0,
    transport_way: "wassally",
    duration: 0,
    package_address: {
      to_address: {
        location: {
          latitude: 20,
          longitude: 20
        },
        formated_address: "Not assigned",
        address_description: "Not assigned"
      },
      from_address: {
        location: {
          latitude: 20,
          longitude: 20
        },

        formated_address: "Not assigned",
        address_description: "Not assigned"
      }
    }
  };

  // create package  steps
  sourceSection: boolean = true;
  destinationSection: boolean = false;
  otherDetailesSection: boolean = false;

  ngOnInit() {
    /**
     * Get the location From map Service
     * Map Return  object of location as an observable
     */

    this.mapService.sharedLocation.subscribe((address: any) => {
      let that = this;
      //assign the source location to the sourcelocation object when the user in the From Page
      if (this.sourceSection) {
        that.createNewPackage.package_address.from_address.location.latitude =
          address.location.lat;
        that.createNewPackage.package_address.from_address.location.longitude =
          address.location.lng;
        that.createNewPackage.package_address.from_address.formated_address =
          address.forrmatted_address;
      }
      //assign the destination location to the destinationlocation object when the user in the To Page

      if (this.destinationSection) {
        that.createNewPackage.package_address.to_address.location.latitude =
          address.location.lat;
        that.createNewPackage.package_address.to_address.location.longitude =
          address.location.lng;
        that.createNewPackage.package_address.to_address.formated_address =
          address.forrmatted_address;
      }
    });
  }

  // Post the package Send it to server
  postOrder(form: NgForm) {
    receiver_name: form.value.receiver_name,
      (this.createNewPackage.duration = form.value.duration);
    this.createNewPackage.weight = form.value.weight;
    this.createNewPackage.note = form.value.note;
    this.createNewPackage.transport_way = "wassally";
    this.createNewPackage.sender_phone_number = this.userService.user
      ? this.userService.user.phone_number
      : "0000";
    this.packageServer.newCreatedPackage = this.createNewPackage;

    const PriceEq = {
      to_formated_address: this.createNewPackage.package_address.to_address
        .formated_address,

      from_formated_address: this.createNewPackage.package_address.from_address
        .formated_address,

      to_location: {
        latitude: this.createNewPackage.package_address.to_address.location
          .latitude,
        longitude: this.createNewPackage.package_address.to_address.location
          .longitude
      },

      from_location: {
        latitude: this.createNewPackage.package_address.from_address.location
          .latitude,
        longitude: this.createNewPackage.package_address.from_address.location
          .longitude
      },

      weight: this.createNewPackage.weight
    };
    this.packageServer.getShipmemtPrice(PriceEq).subscribe((r: any) => {
      const cost: number = r.expected_salary;
      this.packageServer.setPrice(cost);
      this.route.navigate(["/main/newDelivery/confirmShippment"]);
    });
  }

  /**
   * new package steps
   */
  openSource() {
    this.sourceSection = true;
    this.destinationSection = false;
    this.otherDetailesSection = false;
  }
  openReciver(m: NgForm) {
    const value = m.value;

    this.createNewPackage.package_address.from_address.address_description = value;

    this.sourceSection = false;
    this.destinationSection = true;
    this.otherDetailesSection = false;
  }
  openotherDetailes(restAddress, Dname, Dphone) {
    this.createNewPackage.package_address.to_address.address_description =
      restAddress.value;
    this.createNewPackage.receiver_name = Dname.value;
    this.createNewPackage.receiver_phone_number = Dphone.value;
    this.sourceSection = false;
    this.destinationSection = false;
    this.otherDetailesSection = true;
  }
}
