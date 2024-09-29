import { TypographyProps } from '@mui/material';
import { TitleSmallStyled } from './styles';

export const TitleSmall: React.FC<TypographyProps> = (props) => {
  return (
    <TitleSmallStyled variant="caption" {...props}>
      {props.children}
    </TitleSmallStyled>
  );
};
