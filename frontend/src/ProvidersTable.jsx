import { useState } from 'react';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import Typography from '@mui/material/Typography';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ProvidersTable({providers}) {

  const [open, setOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState({
    nombre: "",
    listaEspecialidades: [],
    listaDomicilios: [],
  });

  function handleClickOpen(provider) {
    setSelectedProvider(provider);
    setOpen(true);
  };

  function handleClose () {
    setOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              Prestadores
              <Badge showZero color="secondary" badgeContent={providers.length}>
                <PersonIcon color="action"/>
              </Badge>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {providers.map((p) => (
            <TableRow key={p.id}>
              <TableCell component="th" scope="row">
                <Grid container spacing={2}>
                  <Grid item xs={12}><strong>{p.nombre}</strong></Grid>
                  <Grid item xs={12} md={3.5}>
                    <Stack direction="row" justifyContent="flex-start" alignItems="flex-start">
                      <AccessTimeIcon />
                      <Typography variant="body1" component="span">{p.horarios || <em>No informa</em>}</Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={3.5}>
                    <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                      {p.listaDomicilios.map(d => (
                        <Stack direction="row" justifyContent="flex-start" alignItems="flex-start">
                          <Link rel="noopener" href={d.urlGoogle} target="_blank">
                            {
                              (d.latitud === null || d.longitud === null) ?
                                (
                                <Tooltip
                                  arrow
                                  placement="top"
                                  title="No se muestra en el mapa porque la dirección provista por OSPJN no es precisa"
                                >
                                  <NotListedLocationIcon color="secondary" />
                                </Tooltip>)
                              : (
                                  <MapIcon color="action" />
                                )
                            }

                          </Link>
                          <Typography variant="body1" component="span">
                            {d.domicilio} {d.localidad ? ", " + d.localidad.descripcion : null}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={3.5}>
                    <Stack direction="row" justifyContent="flex-start" alignItems="flex-start">
                      <PhoneIcon color="action" />
                      <Typography variant="body1" component="span">{p.telat}</Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={1.5}>
                    <IconButton color="primary" onClick={() => handleClickOpen(p)}>
                      <ContactPhoneIcon color="action" />
                    </IconButton>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog
        open={open}
        maxWidth="md"
        fullWidth
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {selectedProvider.nombre}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Stack justifyContent="center" alignItems="center" sx={{marginTop: 2}}>
              <Typography variant="body1" sx={{marginBottom: 1}}><strong>Atención</strong></Typography>
              <Typography variant="body1">{selectedProvider.telat}</Typography>
              <Typography variant="body1">{selectedProvider.horarios}</Typography>
            </Stack>
            <Stack justifyContent="center" alignItems="center" sx={{marginTop: 2}}>
              <Typography variant="body1" sx={{marginBottom: 1}}><strong>Especialidades</strong></Typography>
              {selectedProvider.listaEspecialidades.map((e, i) => (
                <Typography key={i} variant="body1">{e.especialidad.nombre}</Typography>
              ))}
            </Stack>
            <Stack justifyContent="center" alignItems="center" sx={{marginTop: 2}}>
              <Typography variant="body1" sx={{marginBottom: 1}}><strong>Domicilios</strong></Typography>
              {selectedProvider.listaDomicilios.map(d => (
                <Typography key={d.codint} variant="body1">
                  {d.domicilio} {d.localidad ? ", " + d.localidad.descripcion : null}
                </Typography>
              ))}
            </Stack>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </TableContainer>
  )
}

export default ProvidersTable;
