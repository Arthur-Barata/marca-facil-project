import { TypographyProps } from "@mui/material";
import React from "react";
import {
  RobotoLargeStyled,
  RobotoMediumBoldStyled,
  RobotoMediumStyled,
  RobotoSmallBoldStyled,
  RobotoSmallStyled,
} from "./styles";

export const RobotoSmall: React.FC<TypographyProps> = (props) => {
  return (
    <RobotoSmallStyled variant="caption" {...props}>
      {props.children}
    </RobotoSmallStyled>
  );
};
export const RobotoBoldSmall: React.FC<TypographyProps> = (props) => {
  return (
    <RobotoSmallBoldStyled variant="caption" {...props}>
      {props.children}
    </RobotoSmallBoldStyled>
  );
};

export const RobotoMedium: React.FC<TypographyProps> = (props) => {
  return (
    <RobotoMediumStyled variant="caption" {...props}>
      {props.children}
    </RobotoMediumStyled>
  );
};

export const RobotoBoldMedium: React.FC<TypographyProps> = (props) => {
  return (
    <RobotoMediumBoldStyled variant="caption" {...props}>
      {props.children}
    </RobotoMediumBoldStyled>
  );
};

export const RobotoLarge: React.FC<TypographyProps> = (props) => {
  return (
    <RobotoLargeStyled variant="caption" {...props}>
      {props.children}
    </RobotoLargeStyled>
  );
};
