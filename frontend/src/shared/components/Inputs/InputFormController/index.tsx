import { FormControl } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { Controller } from "react-hook-form";
import { TextFieldStyles } from "./styles/InputFormStyles";
import {
  ErrorMessage,
  FormControlLabelStyles,
  MdCheckCircleStyled,
  MdOutlineErrorStyled,
} from "./styles/defaultStyles";
import { InputFormControllerProps } from "./types";

export const InputFormController: React.FC<InputFormControllerProps> = ({
  formControl,
  formControlName,
  label,
  mask,
  customMask,
  placeholder,
  inputType,
  fullWidth = true,
  defaultValue,
  onKeyDown,
  disabled,
  readOnly,
  onChangeInput,
  onBlurInput,
}) => {
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
                  inputProps={{ "data-testid": `input-${name}` }}
                  fullWidth
                  id={mask || label || ""}
                  name={name}
                  ref={ref}
                  disabled={disabled}
                  type={inputType || "text"}
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
                  placeholder={placeholder ?? ""}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && onKeyDown && validated) {
                      onKeyDown();
                    }
                  }}
                  InputProps={{
                    readOnly,
                    inputComponent: customMask,
                    endAdornment: (
                      <InputAdornment position="end">
                        {error ? <MdOutlineErrorStyled /> : null}
                        {validated ? <MdCheckCircleStyled /> : null}
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
