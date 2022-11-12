import { Map } from '@components/Map';
import { ProvidersTable } from '@components/ProvidersTable';
import { AboutModal, OSPJNAppBar, SearchForm } from '@components/UI';
import { AppBarButton } from '@components/UI/types';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import * as api from './api';

const INITIAL_POSITION: [number, number] = [-34.6210017,-58.4046389];
const DEFAULT_ESPECIALIDAD = 1076;
const GITHUB_URL="https://github.com/JuanQP/ospjn-mapa";

function App() {
  const [loading, setLoading] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [especialidad, setEspecialidad] = useState(DEFAULT_ESPECIALIDAD);
  const [providers, setProviders] = useState<Provider[]>([]);
  const appBarButtons: AppBarButton[] = [
    {Icon: InfoIcon, onClick: handleAboutClick},
    {Icon: GitHubIcon, rel: "noopener", "href": GITHUB_URL, target: "_blank"},
  ];

  function handleAboutClick() {
    setAboutOpen(true);
  }

  function handleAboutClose() {
    setAboutOpen(false);
  }

  async function getData() {
    setLoading(true);
    try {
      const providers = await api.getProviders(especialidad);
      setProviders(providers);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleEspecialidadChange(value: number) {
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
              onSearchClick={getData}
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
