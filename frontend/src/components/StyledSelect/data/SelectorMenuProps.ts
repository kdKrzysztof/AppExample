import type { MenuProps as SelectorMenuProps } from "@mui/material";

const SelectorMenuProps: Partial<SelectorMenuProps> | undefined = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  transformOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  style: {
    maxHeight: 280
  }
};

export default SelectorMenuProps