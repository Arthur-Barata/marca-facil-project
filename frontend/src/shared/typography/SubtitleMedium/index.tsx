import { TypographyProps } from '@mui/material';
import React from 'react';
import {
  SubtitleMediumBoldStyled,
  SubtitleMediumStyled,
} from 'shared/typography/SubtitleMedium/styles';

export const SubtitleMedium: React.FC<TypographyProps> = (props) => {
  return (
    <SubtitleMediumStyled variant="body1" {...props}>
      {props.children}
    </SubtitleMediumStyled>
  );
};

export const SubtitleMediumBold: React.FC<TypographyProps> = (props) => {
  return (
    <SubtitleMediumBoldStyled variant="body1" {...props}>
      {props.children}
    </SubtitleMediumBoldStyled>
  );
};
