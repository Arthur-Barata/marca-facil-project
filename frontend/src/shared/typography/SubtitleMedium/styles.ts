import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Montserrat } from "styles/common";

export const SubtitleMediumStyled = styled(Typography)<TypographyProps>(() => ({
  font: `400 1rem ${Montserrat}`,
}));

export const SubtitleMediumBoldStyled = styled(Typography)<TypographyProps>(
  () => ({
    font: `700 1rem ${Montserrat}`,
  })
);
