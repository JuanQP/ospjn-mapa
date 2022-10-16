import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import React from "react";
// This is neccesary to make Leaflet markers work.
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: markerShadow,
});

export function Map({ initialPosition, providers }) {
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
        {p.listaDomicilios.filter(d => d.latitud && d.longitud).map((d, j) => (
          <Marker key={j} position={[d.latitud, d.longitud]}>
            <Popup>
              <strong>{p.nombre}</strong><br />
              Teléfono: {p.telat}<br />
              Horarios: {p.horarios}<br />
              Dirección: {d.domicilio}
            </Popup>
          </Marker>
        ))}
        </React.Fragment>
      ))}
    </MapContainer>
  )
}
