export function hasLatLong(domicilio: Domicilio): domicilio is DomicilioWithLatLong {
  return typeof domicilio.latitud === 'number'
    && typeof domicilio.longitud === 'number';
}
