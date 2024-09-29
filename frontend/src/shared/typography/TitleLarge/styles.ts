import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Montserrat } from "styles/common";

export const TitleLargeStyled = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    font: `400 1.375rem ${Montserrat}`,
  })
);

export const TitleLargeBoldStyled = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    font: `700 1.375rem ${Montserrat}`,
  })
);
