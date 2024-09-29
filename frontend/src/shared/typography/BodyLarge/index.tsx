import { TypographyProps } from '@mui/material';
import { BodyLargeStyled } from 'shared/typography/BodyLarge/styles';

export const BodyLarge: React.FC<TypographyProps> = (props) => {
  return (
    <BodyLargeStyled variant="subtitle1" {...props}>
      {props.children}
    </BodyLargeStyled>
  );
};
