import { hasLatLong } from "@/helpers";
import MapIcon from '@mui/icons-material/Map';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import { Box, Link, Tooltip, Typography } from "@mui/material";

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

interface Props {
  domicilio: Domicilio;
}

export function ProviderDomicilio({ domicilio }: Props) {

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
