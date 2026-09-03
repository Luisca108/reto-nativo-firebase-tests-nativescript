import { Component } from "@angular/core";
import { ImageSource } from "@nativescript/core";
import { shareImage, shareText } from "@nativescript/social-share";
import { Store } from "@ngrx/store";

import { imageShared, textShared } from "../../store/native.actions";

@Component({
  selector: "ns-share",
  templateUrl: "./share.component.html",
  styleUrls: ["./share.component.css"]
})
export class ShareComponent {
  textToShare = "Estoy probando capacidades nativas con NativeScript.";

  constructor(private readonly store: Store) {}

  shareTextContent(): void {
    shareText(this.textToShare, "Compartir texto");
    this.store.dispatch(textShared({ text: this.textToShare }));
  }

  async shareBundledImage(): Promise<void> {
    const image = await ImageSource.fromResource("share_sample");
    if (!image) {
      return;
    }

    shareImage(image, {
      caption: "Imagen compartida desde NativeScript",
      fileFormat: "png"
    });
    this.store.dispatch(imageShared({ path: "res://share_sample" }));
  }
}
