import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Montserrat } from 'styles/common';

export const SubtitleLargeStyled = styled(Typography)<TypographyProps>(() => ({
  font: `400 1.125rem ${Montserrat}`,
}));
