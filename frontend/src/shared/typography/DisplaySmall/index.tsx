import { TypographyProps } from '@mui/material';
import { DisplaySmallStyled } from 'shared/typography/DisplaySmall/styles';

export const DisplaySmall: React.FC<TypographyProps> = (props) => {
  return (
    <DisplaySmallStyled variant="h3" {...props}>
      {props.children}
    </DisplaySmallStyled>
  );
};
