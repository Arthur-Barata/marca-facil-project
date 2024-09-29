import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Montserrat } from 'styles/common';

export const BodyLargeStyled = styled(Typography)<TypographyProps>(() => ({
  font: `600 1.25rem ${Montserrat}`,
}));
