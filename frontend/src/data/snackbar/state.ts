import { ISnackbarState } from './types';

export const snackbarInitialState: ISnackbarState = {
  error: false,
  title: '',
  severity: 'error',
};
