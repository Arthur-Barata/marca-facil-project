import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Montserrat } from 'styles/common';

export const HeadlineLargeStyled = styled(Typography)<TypographyProps>(() => ({
  font: `800 2rem ${Montserrat}`,
}));
