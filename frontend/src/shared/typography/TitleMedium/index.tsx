import { TypographyProps } from '@mui/material';
import { StyledTitleMediumTypography } from 'shared/typography/TitleMedium/styles';

export const TitleMedium: React.FC<TypographyProps> = (props) => {
  return (
    <StyledTitleMediumTypography variant="subtitle1" {...props}>
      {props.children}
    </StyledTitleMediumTypography>
  );
};
