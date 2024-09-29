import { TypographyProps } from '@mui/material';
import { HeadlineSmallStyled } from 'shared/typography/HeadlineSmall/styles';

export const HeadlineSmall: React.FC<TypographyProps> = (props) => {
  return (
    <HeadlineSmallStyled variant="h6" {...props}>
      {props.children}
    </HeadlineSmallStyled>
  );
};
