import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Nunito } from "styles/common";

export const HeaderLargeStyled = styled(Typography)<TypographyProps>(() => ({
  font: `700 1.5rem ${Nunito}`,
}));
