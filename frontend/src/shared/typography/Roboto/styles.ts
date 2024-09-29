import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Roboto } from "styles/common";

export const RobotoSmallStyled = styled(Typography)<TypographyProps>(() => ({
  font: `400 0.875rem ${Roboto}`,
}));

export const RobotoSmallBoldStyled = styled(Typography)<TypographyProps>(
  () => ({
    font: `700 0.875rem ${Roboto}`,
  })
);

export const RobotoMediumStyled = styled(Typography)<TypographyProps>(() => ({
  font: `400 1rem ${Roboto}`,
}));

export const RobotoMediumBoldStyled = styled(Typography)<TypographyProps>(
  () => ({
    font: `600 1rem ${Roboto}`,
  })
);

export const RobotoLargeStyled = styled(Typography)<TypographyProps>(() => ({
  font: `700 1.5rem ${Roboto}`,
}));
