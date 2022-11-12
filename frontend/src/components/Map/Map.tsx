import { hasLatLong } from '@/helpers';
import L from 'leaflet';
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { DomicilioMarker } from "./DomicilioMarker";

const DefaultIcon = L.icon({
  iconUrl: iconMarker,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Props {
  initialPosition: [number, number];
  providers: Provider[];
}

export function Map({ initialPosition, providers }: Props) {

  return (
    <MapContainer
      center={initialPosition}
      zoom={13}
      style={{height: "600px", width: "100%"}}
      maxZoom={17}
      zoomAnimationThreshold={2}
      dragging={!L.Browser.mobile}
      tap={!L.Browser.mobile}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | github.com/JuanQP'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {providers.map((p, i) => (
        <React.Fragment key={i}>
        {p.listaDomicilios.filter(hasLatLong).map((d, j) => (
          <DomicilioMarker key={`domicilio-${j}`} provider={p} domicilio={d} />
        ))}
        </React.Fragment>
      ))}
    </MapContainer>
  )
}
