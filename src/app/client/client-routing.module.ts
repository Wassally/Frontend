import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { DeliveriesComponent } from "./deliveries/deliveries.component";
import { PackagesComponent } from "./packages/packages.component";
import { CaptinProfileComponent } from "./captin-profile/captin-profile.component";
import { NewDeliveryComponent } from "./new-delivery/new-delivery.component";
import { ProfileComponent } from "./profile/profile.component";
import { EditProfileComponent } from "./profile/edit-profile/edit-profile.component";
import { TrackComponent } from "./track/track.component";
import { AuthGuard } from "@app/Authentucation/signin-page/auth/auth.guard";
import { ConfirmPostComponent } from "./new-delivery/confirm-post/confirm-post.component";
import { HomeComponent } from "./home/home.component";

const clientRouter: Routes = [
  {
    path: "",
    //  redirectTo:'deliveries' ,
    component: MainComponent,
    canActivateChild: [AuthGuard],

    children: [
      {
        path: "deliveries",
        component: DeliveriesComponent
      },
      {
        path: "delivered",
        component: DeliveriesComponent
      },
      {
        path: "home",
        component: HomeComponent
      },

      {
        path: "deliveries/:id",
        component: PackagesComponent,
        children: []
      },

      {
        path: "deliveries/:id/captin",
        component: CaptinProfileComponent
      },
      {
        path: "newDelivery",
        component: NewDeliveryComponent
      },
      {
        path: "newDelivery/confirmShippment",
        component: ConfirmPostComponent
      },
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "profile/editProfile",
        component: EditProfileComponent
      },
      {
        path: "track",
        component: TrackComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(clientRouter)],
  exports: [RouterModule]
})
export class clientRoutingModule {}
