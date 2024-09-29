import { TypographyProps } from '@mui/material';
import { HeadlineMediumStyled } from 'shared/typography/HeadlineMedium/styles';

export const HeadlineMedium: React.FC<TypographyProps> = (props) => {
  return (
    <HeadlineMediumStyled variant="h5" {...props}>
      {props.children}
    </HeadlineMediumStyled>
  );
};
