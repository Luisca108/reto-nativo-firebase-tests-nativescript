import { Component } from "@angular/core";
import { ImageAsset, ImageSource } from "@nativescript/core";
import { alert } from "@nativescript/core/ui/dialogs";
import { requestCameraPermissions, takePicture } from "@nativescript/camera";
import { shareImage } from "@nativescript/social-share";
import { Store } from "@ngrx/store";

import { imageShared } from "../../store/native.actions";

@Component({
  selector: "ns-camera",
  templateUrl: "./camera.component.html",
  styleUrls: ["./camera.component.css"]
})
export class CameraComponent {
  photo?: ImageAsset;
  private photoImageSource?: ImageSource;

  constructor(private readonly store: Store) {}

  async takePhoto(): Promise<void> {
    const permissions = await requestCameraPermissions();

    if (!permissions.Success) {
      await alert("Permiso de camara denegado.");
      return;
    }

    this.photo = await takePicture({
      width: 900,
      height: 900,
      keepAspectRatio: true,
      saveToGallery: false
    });

    this.photoImageSource = await ImageSource.fromAsset(this.photo);
  }

  async sharePhoto(): Promise<void> {
    if (!this.photoImageSource) {
      await alert("Toma una foto antes de compartir.");
      return;
    }

    shareImage(this.photoImageSource, {
      caption: "Foto tomada con la camara del dispositivo",
      fileFormat: "jpg"
    });
    this.store.dispatch(imageShared({ path: "camera://last-photo" }));
  }
}
