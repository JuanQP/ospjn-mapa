import { Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';

export function ProviderDetailsModal({ provider, open, onClose }) {
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
          <Stack justifyContent="center" alignItems="center" sx={{marginTop: 2}}>
            <Typography variant="body1" sx={{marginBottom: 1}}><strong>Atención</strong></Typography>
            <Typography variant="body1">{provider.telat}</Typography>
            <Typography variant="body1">{provider.horarios}</Typography>
          </Stack>
          <Stack justifyContent="center" alignItems="center" sx={{marginTop: 2}}>
            <Typography variant="body1" sx={{marginBottom: 1}}><strong>Especialidades</strong></Typography>
            {provider.listaEspecialidades.map((e, i) => (
              <Typography key={i} variant="body1">{e.especialidad.nombre}</Typography>
            ))}
          </Stack>
          <Stack justifyContent="center" alignItems="center" sx={{marginTop: 2}}>
            <Typography variant="body1" sx={{marginBottom: 1}}><strong>Domicilios</strong></Typography>
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
