import { TypographyProps } from '@mui/material';
import { DisplaySmallStyled } from './styles';

export const DisplayMedium: React.FC<TypographyProps> = (props) => {
  return (
    <DisplaySmallStyled variant="h2" {...props}>
      {props.children}
    </DisplaySmallStyled>
  );
};
