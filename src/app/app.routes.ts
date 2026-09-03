import { Routes } from "@angular/router";

import { CameraComponent } from "./screens/camera/camera.component";
import { HomeComponent } from "./screens/home/home.component";
import { MapComponent } from "./screens/map/map.component";
import { ShareComponent } from "./screens/share/share.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "share", component: ShareComponent },
  { path: "camera", component: CameraComponent },
  { path: "map", component: MapComponent }
];
