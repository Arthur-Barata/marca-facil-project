import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Montserrat } from 'styles/common';

export const DisplayLargeStyled = styled(Typography)<TypographyProps>(() => ({
  font: `800 3.5rem ${Montserrat}`,
}));
