import { TypographyProps } from '@mui/material';
import { HeadlineLargeStyled } from 'shared/typography/HeadlineLarge/styles';

export const HeadlineLarge: React.FC<TypographyProps> = (props) => {
  return (
    <HeadlineLargeStyled variant="h4" {...props}>
      {props.children}
    </HeadlineLargeStyled>
  );
};
