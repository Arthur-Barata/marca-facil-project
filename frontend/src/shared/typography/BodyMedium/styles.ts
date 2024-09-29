import { Typography, TypographyProps } from "@mui/material";

import { styled } from "@mui/material/styles";
import { Montserrat } from "styles/common";

export const BodyMediumBoldStyled = styled(Typography)<TypographyProps>(() => ({
  font: `700 0.875rem ${Montserrat}`,
}));

export const BodyMediumRegularStyled = styled(Typography)<TypographyProps>(
  () => ({
    font: `400 0.875rem ${Montserrat}`,
  })
);
