import { Marker, Popup } from "react-leaflet";

interface Props {
  provider: Provider;
  domicilio: DomicilioWithLatLong
}

export function DomicilioMarker({ provider, domicilio }: Props) {
  return (
    <Marker position={[domicilio.latitud, domicilio.longitud]}>
      <Popup>
        <strong>{provider.nombre}</strong><br />
        Teléfono: {provider.telat}<br />
        Horarios: {provider.horarios}<br />
        Dirección: {domicilio.domicilio}
      </Popup>
    </Marker>
  )
}
