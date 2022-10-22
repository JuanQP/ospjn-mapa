import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './app.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Helmet } from "react-helmet";

const theme = createTheme({
  palette: {
    primary: {
      main: '#85586c',
    },
    secondary: {
      main: '#00c9b7',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta name="theme-color" content={theme.palette.primary.main} />
      </Helmet>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
