import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Montserrat } from 'styles/common';

export const HeadlineMediumStyled = styled(Typography)<TypographyProps>(() => ({
  font: `800 1.75rem ${Montserrat}`,
}));
