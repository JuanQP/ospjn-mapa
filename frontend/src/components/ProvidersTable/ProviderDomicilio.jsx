import { Box, Link, Tooltip, Typography } from "@mui/material";
import MapIcon from '@mui/icons-material/Map';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';

function hasLatLong(domicilio) {
  return domicilio.latitud !== null && domicilio.longitud !== null;
}

function DomicilioMapIcon() {
  return <MapIcon color="primary" />;
}

function TooltipMapIcon() {
  return (
    <Tooltip
      arrow
      placement="top"
      title="No se muestra en el mapa porque la dirección provista por OSPJN no es precisa"
    >
      <NotListedLocationIcon color="disabled" />
    </Tooltip>
  );
}

export function ProviderDomicilio({ domicilio }) {

  const localidad = domicilio.localidad ? `, ${domicilio.localidad.descripcion}` : null;

  return (
    <Box display="flex">
      <Link rel="noopener" href={domicilio.urlGoogle} target="_blank">
        {hasLatLong(domicilio) ? <DomicilioMapIcon /> : <TooltipMapIcon /> }
      </Link>
      <Typography variant="body1" component="span">
        {domicilio.domicilio}{localidad}
      </Typography>
    </Box>
  )
}
