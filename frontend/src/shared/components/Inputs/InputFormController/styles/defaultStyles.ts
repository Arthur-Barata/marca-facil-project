import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Container, FormControlLabel, styled } from "@mui/material";
import { MdCheckCircle, MdOutlineError } from "react-icons/md";
import { BodyMediumRegular } from "shared/typography/BodyMedium";
import { Montserrat } from "styles/common";

export const FormControlLabelStyles = styled(FormControlLabel)(({ theme }) => ({
  "&, & + .MuiFormControlLabel-label": {
    marginRight: "unset",
    marginLeft: "unset",
  },
  span: {
    color: theme.palette.common.black,
    font: `400 0.8125rem/1.25rem ${Montserrat}`,
    alignSelf: "start",
    marginBottom: "0.5rem",
    marginRight: "unset",
    marginLeft: "unset",
    whiteSpace: "nowrap",
  },
  p: {
    font: `700 1rem/1.25rem ${Montserrat}`,
    marginTop: "0rem",
  },

  [theme.breakpoints.up("sm")]: {
    p: {
      font: `700 1rem/1.25rem ${Montserrat}`,
      marginTop: "0.6rem",
    },
  },
}));

export const SvgStyle = styled(Container)(({ theme }) => ({
  width: 0,
}));

export const MdCheckCircleStyled = styled(MdCheckCircle)(({ theme }) => ({
  color: theme.palette.blue.main,
}));

export const VisibilityOutlinedIconStyled = styled(VisibilityOutlinedIcon)(
  ({ theme }) => ({
    color: theme.palette.blue.main,
  })
);

export const VisibilityOffOutlinedIconStyled = styled(
  VisibilityOffOutlinedIcon
)(({ theme }) => ({
  color: theme.palette.blue.main,
}));

export const MdOutlineErrorStyled = styled(MdOutlineError)(({ theme }) => ({
  color: theme.palette.error.main,
}));

export const ErrorMessage = styled(BodyMediumRegular)(({ theme }) => ({
  color: theme.palette.error.main,
  height: "1rem",
  marginBottom: "0.5rem",
}));
