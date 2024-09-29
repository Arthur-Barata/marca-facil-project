import { HTMLInputTypeAttribute } from "react";
import { Control } from "react-hook-form";

export type InputFormControllerProps = {
  formControl: Control<any>;
  formControlName: string;
  label?: string;
  mask?: string;
  customMask?: any;
  placeholder?: string;
  inputType?: HTMLInputTypeAttribute;
  fullWidth?: boolean;
  defaultValue?: string;
  onKeyDown?: Function;
  register?: any;
  disabled?: boolean;
  readOnly?: boolean;
  onChangeInput?: Function;
  onBlurInput?: Function;
};
