import { Alert, styled } from '@mui/material';

export const AlertStyled = styled(Alert)(({ theme }) => ({
  color: theme.palette.common.white,
  maxWidth: '33rem',
  alignItems: 'center',
}));
