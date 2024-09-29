import { SvgIcon } from "@mui/material";
import { FlexButtonStyles } from "./styles";
import { CustomButtomProps } from "./types";

export const FlexButton: React.FC<CustomButtomProps> = ({
  text,
  handleClick,
  startIcon,
  endIcon,
  disabled = false,
  fullWidth,
  backgroundColor,
  width,
  outline = false,
}) => {
  return (
    <FlexButtonStyles
      width={width}
      backgroundColor={backgroundColor}
      outline={outline}
      fullWidth={fullWidth}
      disabled={disabled}
      startIcon={startIcon && <SvgIcon component={startIcon} />}
      endIcon={endIcon && <SvgIcon component={endIcon} />}
      onClick={() => handleClick?.()}
    >
      {text}
    </FlexButtonStyles>
  );
};
