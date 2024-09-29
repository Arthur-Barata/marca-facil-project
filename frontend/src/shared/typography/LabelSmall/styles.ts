import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Montserrat } from "styles/common";

export const LabelSmallStyled = styled(Typography)<TypographyProps>(() => ({
  font: `400 0.8125rem ${Montserrat}`,
}));
