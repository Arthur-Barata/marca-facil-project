import { FormControl } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { TextFieldStyles } from "../InputFormController/styles/InputFormStyles";
import {
  ErrorMessage,
  FormControlLabelStyles,
  VisibilityOffOutlinedIconStyled,
  VisibilityOutlinedIconStyled,
} from "../InputFormController/styles/defaultStyles";
import { InputFormPasswordProps } from "./types";

export const InputFormPassword: React.FC<InputFormPasswordProps> = ({
  formControl,
  formControlName,
  label,
  mask,
  customMask,
  fullWidth = true,
  defaultValue,
  onKeyDown,
  disabled,
  readOnly,
  onChangeInput,
  onBlurInput,
}) => {
  const [isPassword, setIsPassword] = useState(true);

  return (
    <Controller
      name={formControlName}
      control={formControl}
      render={({
        field: { onChange, onBlur, ref, name, value },
        fieldState: { error, invalid },
      }) => {
        const validated = value && !error && !invalid;

        return (
          <FormControl fullWidth={fullWidth}>
            <FormControlLabelStyles
              id={label}
              label={`${label}:`}
              value={value || defaultValue || ""}
              onChange={onChange}
              labelPlacement={"top"}
              control={
                <TextFieldStyles
                  inputProps={{ "data-testid": `input-password-${name}` }}
                  fullWidth
                  id={mask || label || ""}
                  name={name}
                  ref={ref}
                  disabled={disabled}
                  type={isPassword ? "password" : "text"}
                  error={!!error}
                  autoComplete="off"
                  autoCapitalize="none"
                  onChange={(value) => {
                    onChangeInput?.(value.target.value);
                    onChange(value);
                  }}
                  onBlur={(value) => {
                    onBlurInput?.(value.target.value);
                    onBlur();
                  }}
                  value={value || defaultValue || ""}
                  placeholder={"********"}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && onKeyDown && validated) {
                      onKeyDown();
                    }
                  }}
                  InputProps={{
                    readOnly,
                    inputComponent: customMask,
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        onClick={() => setIsPassword(!isPassword)}
                      >
                        {isPassword ? (
                          <VisibilityOutlinedIconStyled />
                        ) : (
                          <VisibilityOffOutlinedIconStyled />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              }
            />

            <ErrorMessage>{error?.message}</ErrorMessage>
          </FormControl>
        );
      }}
    />
  );
};
