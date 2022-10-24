import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

export function AboutModal({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        OSPJN Mapa
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Hecho con <FavoriteIcon fontSize="small" htmlColor="red"/>
        </DialogContentText>
        <DialogContentText>
          ✅ Seleccioná la especialidad que estás buscando, presioná en Buscar, y listo!
        </DialogContentText>
        <DialogContentText>
          📱 Si estás desde el celular, usá dos dedos sobre el mapa para desplazarte
        </DialogContentText>
        <DialogContentText>
          👌 El propósito de esta aplicación es mostrar la información de prestadores de una forma distinta. En este caso un mapa me pareció mejor que simplemente mostrar una lista gigantesca.
        </DialogContentText>
        <DialogContentText>
          ℹ️ Toda la información usada en esta página es información pública.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
