import { TypographyProps } from "@mui/material";
import { HeaderLargeStyled } from "./styles";

export const HeaderLarge: React.FC<TypographyProps> = (props) => {
  return (
    <HeaderLargeStyled variant="h5" {...props}>
      {props.children}
    </HeaderLargeStyled>
  );
};
