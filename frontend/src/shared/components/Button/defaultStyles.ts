import { alpha, Button, styled } from "@mui/material";
import { Montserrat } from "styles/common";

export const getClassSizes = {
  small: { height: "3rem" },
  medium: { height: "3.5rem" },
  large: { height: "4rem" },
};

export const ButtonStyled = styled(Button)(({ theme, size = "medium" }) => ({
  font: `700 1rem ${Montserrat}`,
  borderRadius: "3.188rem",
  textTransform: "unset",
  color: theme.palette.common.white,

  ...getClassSizes[size],

  "&:disabled": {
    pointerEvents: "none",
    color: alpha(theme.palette.common.white, 0.6),
  },

  [theme.breakpoints.down("ms")]: {
    width: "100%",
  },

  [theme.breakpoints.up("sm")]: {
    minWidth: "10rem",
  },
}));
