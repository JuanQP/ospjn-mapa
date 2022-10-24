import { useState } from 'react';
import Badge from '@mui/material/Badge';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import { ProvidersTableRow } from './ProvidersTableRow.jsx';
import { Box } from '@mui/material';
import { ProviderDetailsModal } from './ProviderDetailsModal.jsx';

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
      <Table aria-label="Tabla de Prestadores de Servicios">
        <TableHead>
          <TableRow>
            <TableCell>
              <Box display="flex">
                <Typography fontWeight="bold">Prestadores</Typography>
                <Badge showZero color="secondary" badgeContent={providers.length}>
                  <PersonIcon color="action"/>
                </Badge>
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {providers.map((p) => (
            <ProvidersTableRow
              key={p.id}
              provider={p}
              onProviderDetailClick={handleClickOpen}
            />
          ))}
        </TableBody>
      </Table>
      <ProviderDetailsModal
        open={open}
        provider={selectedProvider}
        onClose={handleClose}
      />
    </TableContainer>
  )
}

export default ProvidersTable;
