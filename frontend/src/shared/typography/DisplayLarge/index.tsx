import { TypographyProps } from '@mui/material';
import { DisplayLargeStyled } from './styles';

export const DisplayLarge: React.FC<TypographyProps> = (props) => {
  return (
    <DisplayLargeStyled variant="h1" {...props}>
      {props.children}
    </DisplayLargeStyled>
  );
};
