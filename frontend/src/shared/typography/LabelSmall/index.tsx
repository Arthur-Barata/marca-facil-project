import { TypographyProps } from '@mui/material';
import React from 'react';
import { LabelSmallStyled } from 'shared/typography/LabelSmall/styles';

export const LabelSmall: React.FC<TypographyProps> = (props) => {
  return (
    <LabelSmallStyled variant="caption" {...props}>
      {props.children}
    </LabelSmallStyled>
  );
};
