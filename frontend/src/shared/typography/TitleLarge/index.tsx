import { TypographyProps } from '@mui/material';
import React from 'react';
import { TitleLargeBoldStyled, TitleLargeStyled } from 'shared/typography/TitleLarge/styles';

export const TitleLarge: React.FC<TypographyProps> = (props) => {
  return (
    <TitleLargeStyled variant="h6" {...props}>
      {props.children}
    </TitleLargeStyled>
  );
};

export const TitleLargeBold: React.FC<TypographyProps> = (props) => {
  return (
    <TitleLargeBoldStyled variant="h6" {...props}>
      {props.children}
    </TitleLargeBoldStyled>
  );
};
