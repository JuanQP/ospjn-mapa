import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { AppBarButton } from "./types";

function toIconButton(button: AppBarButton, index: number) {
  const { Icon, ...buttonProps } = button;
  return (
    <IconButton
      key={index}
      size="large"
      color="inherit"
      {...buttonProps}
    >
      <Icon />
    </IconButton>
  )
}

interface Props {
  buttons: AppBarButton[];
}

export function OSPJNAppBar({ buttons }: Props) {

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{marginRight: 'auto'}}>
          OSPJN Mapa
        </Typography>
        {buttons.map(toIconButton)}
      </Toolbar>
    </AppBar>
  )
}
