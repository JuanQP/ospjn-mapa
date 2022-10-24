import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import axios from 'axios';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import { AboutModal } from './components/AboutModal';
import { Map } from './components/Map/Map';
import { OSPJNAppBar } from './components/OSPJNAppBar';
import ProvidersTable from './components/ProvidersTable/ProvidersTable';
import SearchForm from './components/SearchForm';

const INITIAL_POSITION = [-34.6210017,-58.4046389];
const DEFAULT_ESPECIALIDAD = 1076;
const GITHUB_URL="https://github.com/JuanQP/ospjn-mapa";
const PROVIDERS_URL = '/api/providers';

function App() {

  const [loading, setLoading] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [especialidad, setEspecialidad] = useState(DEFAULT_ESPECIALIDAD);
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
    axios.post(PROVIDERS_URL, {especialidad}).then(response => {
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
              defaultEspecialidad={DEFAULT_ESPECIALIDAD}
              onEspecialidadChange={handleEspecialidadChange}
              onSearchClick={postData}
            />
          </Grid>
          <Grid xs={12}>
            <Map initialPosition={INITIAL_POSITION} providers={providers} />
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
