import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Montserrat } from 'styles/common';

export const DisplaySmallStyled = styled(Typography)<TypographyProps>(() => ({
  font: `800 2.5rem ${Montserrat}`,
}));
