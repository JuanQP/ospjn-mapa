import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PhoneIcon from '@mui/icons-material/Phone';
import { Stack, TableCell, TableRow, Theme, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
import { ProviderDomicilio } from './ProviderDomicilio';

const styles = {
  row: (theme: Theme) => ({
    verticalAlign: 'initial',
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  }),
  typography: {
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.2)',
  },
}

interface Props {
  provider: Provider;
  onProviderDetailClick: (provider: Provider) => void;
}

export function ProvidersTableRow({ provider, onProviderDetailClick }: Props) {
  return (
    <TableRow sx={styles.row}>
      <TableCell>
        <Grid container>
          <Grid xs={12} sm={3}>
            <Stack direction="column">
              <Typography color="primary" sx={styles.typography}>
                {provider.nombre}
              </Typography>
              <Box display="flex">
                <AccessTimeIcon color="primary" />
                <Typography variant="body1" component="span">
                  {provider.horarios || <em>No informa</em>}
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid xs={12} sm={3}>
            <Stack direction="column">
              {provider.listaDomicilios.map((d, domicilioIndex) => (
                <ProviderDomicilio
                  key={`p${provider.id}-d${domicilioIndex}`}
                  domicilio={d}
                />
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} sm={3}>
            <Box display="flex">
              <PhoneIcon color="primary" />
              <Typography variant="body1" component="span">
                {provider.telat}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} sm={3} display="flex" justifyContent="end" alignItems="center">
            <IconButton onClick={() => onProviderDetailClick(provider)}>
              <ContactPhoneIcon color="primary" />
            </IconButton>
          </Grid>
        </Grid>
      </TableCell>
    </TableRow>
  )
}
