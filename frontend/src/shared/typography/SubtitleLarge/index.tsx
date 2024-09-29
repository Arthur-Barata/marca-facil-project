import { TypographyProps } from '@mui/material';
import React from 'react';
import { SubtitleLargeStyled } from 'shared/typography/SubtitleLarge/styles';

export const SubtitleLarge: React.FC<TypographyProps> = (props) => {
  return (
    <SubtitleLargeStyled variant="subtitle2" {...props}>
      {props.children}
    </SubtitleLargeStyled>
  );
};
