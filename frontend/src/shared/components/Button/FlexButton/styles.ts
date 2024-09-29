import { styled } from "@mui/material";
import { ButtonStyled } from "../defaultStyles";
import { CustomButtomProps } from "./types";

export const FlexButtonStyles = styled(ButtonStyled)<CustomButtomProps>(
  ({ theme, fullWidth, backgroundColor, outline, width }) => ({
    height: "3rem",
    width: fullWidth ? "100%" : width,
    padding: "0rem 4rem",
    borderRadius: "0.25rem",
    border: outline ? "1px solid white" : "unset",
    backgroundColor: backgroundColor || theme.palette.blue.main,

    "&:hover": {
      backgroundColor: backgroundColor || theme.palette.blue.main,
    },
    "&:disabled": {
      opacity: 0.6,
    },

    [theme.breakpoints.down("sm")]: {
      width: "0rem 2rem",
    },
  })
);
