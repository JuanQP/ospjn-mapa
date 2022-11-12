import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface AppBarButton {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  onClick?: () => void;
  rel?: string;
  href?: string;
  target?: "_blank";
}

interface EspecialidadOption {
  id: number;
  label: string;
}
