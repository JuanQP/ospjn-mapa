import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

function toIconButton(button, index) {
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

export function OSPJNAppBar({ buttons = [] }) {

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
