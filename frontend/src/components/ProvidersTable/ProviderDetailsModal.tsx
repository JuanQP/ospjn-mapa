import { Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';

const styles = {
  stack: {
    marginTop: 2,
  },
  typography: {
    marginBottom: 1,
  }
}

interface Props {
  provider: Provider;
  open: boolean;
  onClose: () => void;
}

export function ProviderDetailsModal({ provider, open, onClose }: Props) {
  return (
    <Dialog
      open={open}
      maxWidth="md"
      fullWidth
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {provider.nombre}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" component="div">
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={styles.stack}
          >
            <Typography variant="body1" sx={styles.typography}>
              <strong>Atención</strong>
            </Typography>
            <Typography variant="body1">
              {provider.telat}
            </Typography>
            <Typography variant="body1">
              {provider.horarios}
            </Typography>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={styles.stack}
          >
            <Typography variant="body1" sx={styles.typography}>
              <strong>Especialidades</strong>
            </Typography>
            {provider.listaEspecialidades.map((e, i) => (
              <Typography key={i} variant="body1">{e.especialidad.nombre}</Typography>
            ))}
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={styles.stack}
          >
            <Typography variant="body1" sx={styles.typography}>
              <strong>Domicilios</strong>
            </Typography>
            {provider.listaDomicilios.map(d => (
              <Typography key={d.codint} variant="body1">
                {d.domicilio} {d.localidad ? ", " + d.localidad.descripcion : null}
              </Typography>
            ))}
          </Stack>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
