import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule, NativeScriptModule, NativeScriptRouterModule } from "@nativescript/angular";
import { GoogleMapsModule } from "@nativescript/google-maps/angular";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { CameraComponent } from "./screens/camera/camera.component";
import { HomeComponent } from "./screens/home/home.component";
import { MapComponent } from "./screens/map/map.component";
import { ShareComponent } from "./screens/share/share.component";
import { nativeReducer } from "./store/native.reducer";

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    HomeComponent,
    MapComponent,
    ShareComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    GoogleMapsModule,
    NativeScriptFormsModule,
    NativeScriptModule,
    NativeScriptRouterModule.forRoot(routes),
    StoreModule.forRoot({ native: nativeReducer })
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
