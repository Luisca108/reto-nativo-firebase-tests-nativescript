import { Component } from "@angular/core";
import { MapReadyEvent } from "@nativescript/google-maps";

@Component({
  selector: "ns-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent {
  lat = 14.6349;
  lng = -90.5069;
  zoom = 14;

  onMapReady(event: MapReadyEvent): void {
    event.map.addMarker({
      position: {
        lat: this.lat,
        lng: this.lng
      },
      title: "Marker del reto",
      snippet: "Google Maps configurado con API key propia"
    });
  }
}
