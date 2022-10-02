import * as L from "leaflet";

// instructions to every other class on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private leafletMap: L.Map; // we don't allow outside access to this variable

  constructor(divId: string) {
    this.leafletMap = new L.Map(document.getElementById(divId) || "", {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 2,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(this.leafletMap);
  }

  addMarker(mappable: Mappable): void {
    const marker = L.marker(mappable.location).addTo(this.leafletMap);
    marker.bindPopup(`<b>Hello there!</b><br>${mappable.markerContent()}`);
  }
}
