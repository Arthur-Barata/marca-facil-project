import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Montserrat } from "styles/common";

export const TitleSmallStyled = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    font: `400 0.75rem ${Montserrat}`,
  })
);
