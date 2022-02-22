import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import ProvidersTable from './ProvidersTable';
import SearchForm from './SearchForm';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';

import L from 'leaflet';

// This is neccesary to make Leaflet markers work.
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const initialPosition = [-34.6210017,-58.4046389];
const defaultEspecialidad = 1076;

function App() {

  const [loading, setLoading] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [especialidad, setEspecialidad] = useState(defaultEspecialidad);
  const [providers, setProviders] = useState([]);

  function handleAboutClick() {
    setAboutOpen(true);
  }

  function handleAboutClose() {
    setAboutOpen(false);
  }

  function postData() {
    setLoading(true);
    axios.post('/api/data', {especialidad}).then(response => {
      setProviders(response.data.documents)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setLoading(false);
    });
  }

  function handleEspecialidadChange(value) {
    setEspecialidad(value);
  }

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OSPJN Mapa
          </Typography>
          <IconButton
            size="large"
            color="inherit"
            onClick={handleAboutClick}
          >
            <InfoIcon />
          </IconButton>
          <IconButton
            size="large"
            color="inherit"
            rel="noopener"
            href="https://github.com/JuanQP/ospjn-mapa"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container sx={{marginTop: 2}}>
        <Grid container direction="row" spacing={2}>
          {/* Search form */}
          <Grid item md={12}>
            <SearchForm
              loading={loading}
              defaultEspecialidad={defaultEspecialidad}
              onEspecialidadChange={handleEspecialidadChange}
              onSearchClick={postData}
            />
          </Grid>
          {/* Map */}
          {/* <Grid item md={12}> */}
            <MapContainer
              center={initialPosition}
              zoom={13}
              style={{height: "600px", width: "100%"}}
              maxZoom={17}
              zoomAnimationThreshold={2}
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
          {/* </Grid> */}
          {/* Fetched data */}
          <Grid item sm={12} md={12} sx={{width: "100%"}}>
            <ProvidersTable providers={providers}/>
          </Grid>
        </Grid>
        <Dialog
          open={aboutOpen}
          onClose={handleAboutClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            OSPJN Mapa
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <p><span>Hecho con </span><FavoriteIcon fontSize="small" color="secondary"/></p>
              <p>Toda la información usada en esta página es información pública.</p>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Container>
    </>
  );
}

export default App;
