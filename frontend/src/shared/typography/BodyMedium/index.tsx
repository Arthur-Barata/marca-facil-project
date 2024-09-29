import { TypographyProps } from '@mui/material';
import { BodyMediumBoldStyled, BodyMediumRegularStyled } from 'shared/typography/BodyMedium/styles';

export const BodyMediumBold: React.FC<TypographyProps> = (props) => {
  return (
    <BodyMediumBoldStyled variant="button" {...props}>
      {props.children}
    </BodyMediumBoldStyled>
  );
};

export const BodyMediumRegular: React.FC<TypographyProps> = (props) => {
  return (
    <BodyMediumRegularStyled variant="body2" {...props}>
      {props.children}
    </BodyMediumRegularStyled>
  );
};
