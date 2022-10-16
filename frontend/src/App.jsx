import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import axios from 'axios';
import ProvidersTable from './ProvidersTable';
import SearchForm from './SearchForm';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import { Map } from './Map';
import { OSPJNAppBar } from './OSPJNAppBar';
import { AboutModal } from './AboutModal';

const initialPosition = [-34.6210017,-58.4046389];
const defaultEspecialidad = 1076;
const GITHUB_URL="https://github.com/JuanQP/ospjn-mapa";

function App() {

  const [loading, setLoading] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [especialidad, setEspecialidad] = useState(defaultEspecialidad);
  const [providers, setProviders] = useState([]);
  const appBarButtons = [
    {Icon: InfoIcon, onClick: handleAboutClick},
    {Icon: GitHubIcon, rel: "noopener", "href": GITHUB_URL, target: "_blank"},
  ];

  function handleAboutClick() {
    setAboutOpen(true);
  }

  function handleAboutClose() {
    setAboutOpen(false);
  }

  function postData() {
    setLoading(true);
    axios.post('/api/providers', {especialidad}).then(response => {
      setProviders(response.data.documents);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    });
  }

  function handleEspecialidadChange(value) {
    setEspecialidad(value);
  }

  return (
    <>
      {/* AppBar buttons */}
      <OSPJNAppBar buttons={appBarButtons} />
      {/* Page content */}
      <Container>
        <Grid container spacing={2}>
          {/* AppBar padding */}
          <Grid xs={12}>
            <AppBar />
          </Grid>
          <Grid xs={12}>
            <SearchForm
              loading={loading}
              defaultEspecialidad={defaultEspecialidad}
              onEspecialidadChange={handleEspecialidadChange}
              onSearchClick={postData}
            />
          </Grid>
          <Grid xs={12}>
            <Map initialPosition={initialPosition} providers={providers} />
          </Grid>
          <Grid xs={12}>
            <ProvidersTable providers={providers}/>
          </Grid>
        </Grid>
        <AboutModal open={aboutOpen} onClose={handleAboutClose} />
      </Container>
    </>
  );
}

export default App;
