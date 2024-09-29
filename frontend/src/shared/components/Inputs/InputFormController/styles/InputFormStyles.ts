import { alpha, styled, TextField } from "@mui/material";
import { Montserrat } from "styles/common";

export const TextFieldStyles = styled(TextField)(
  ({ theme, fullWidth, error }) => ({
    width: fullWidth ? "100%" : "15rem",
    borderRadius: "0.25rem",
    height: "3rem",
    justifyContent: "center",
    border: `.1rem solid ${error ? theme.palette.error.main : theme.palette.blue.main}`,

    input: {
      font: `400 0.875rem ${Montserrat}`,
      color: theme.palette.common.black,

      "&::placeholder": {
        color: alpha(theme.palette.common.black, 0.75),
      },

      "&::-webkit-inner-spin-button": {
        appearance: "none",
      },

      "&::-webkit-outer-spin-button": {
        appearance: "none",
      },

      "-moz-appearance": "textfield",
    },

    fieldset: { border: "none" },

    "&:is(:focus-within)": {
      border: `solid .1rem ${theme.palette.blue.dark}`,
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",
    },
  })
);
