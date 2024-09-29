import { Control } from 'react-hook-form';

export type InputFormPasswordProps = {
  formControl: Control<any>;
  formControlName: string;
  label?: string;
  mask?: string;
  customMask?: any;
  fullWidth?: boolean;
  defaultValue?: string;
  onKeyDown?: Function;
  register?: any;
  disabled?: boolean;
  readOnly?: boolean;
  onChangeInput?: Function;
  onBlurInput?: Function;
};
