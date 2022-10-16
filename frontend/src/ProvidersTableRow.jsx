import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MapIcon from '@mui/icons-material/Map';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import PhoneIcon from '@mui/icons-material/Phone';
import Tooltip from '@mui/material/Tooltip';
import { Stack, TableCell, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';

function hasLatLong(domicilio) {
  return domicilio.latitud !== null && domicilio.longitud !== null;
}

export function ProvidersTableRow({ provider, onProviderDetailClick }) {
  return (
    <TableRow style={{verticalAlign: 'initial'}}>
      <TableCell>
        <Stack direction="column">
          <Typography color="primary">{provider.nombre}</Typography>
          <Box display="flex">
            <AccessTimeIcon color="primary" />
            <Typography variant="body1" component="span">{provider.horarios || <em>No informa</em>}</Typography>
          </Box>
        </Stack>
      </TableCell>
      <TableCell>
        <Stack direction="column">
          {provider.listaDomicilios.map((d, domicilioIndex) => (
            <Box key={`p${provider.id}-d${domicilioIndex}`} display="flex">
              <Link rel="noopener" href={d.urlGoogle} target="_blank">
                {hasLatLong(d) ? (
                  <MapIcon color="primary" />
                ) : (
                  <Tooltip
                    arrow
                    placement="top"
                    title="No se muestra en el mapa porque la dirección provista por OSPJN no es precisa"
                  >
                    <NotListedLocationIcon color="disabled" />
                  </Tooltip>
                )}
              </Link>
              <Typography variant="body1" component="span">
                {d.domicilio}{d.localidad ? `, ${d.localidad.descripcion}` : null}
              </Typography>
            </Box>
          ))}
        </Stack>
      </TableCell>
      <TableCell>
        <Box display="flex">
          <PhoneIcon color="primary" />
          <Typography variant="body1" component="span">{provider.telat}</Typography>
        </Box>
      </TableCell>
      <TableCell>
          <IconButton onClick={() => onProviderDetailClick(provider)}>
            <ContactPhoneIcon color="primary" />
          </IconButton>
      </TableCell>
    </TableRow>
  )
}
