import { styled } from "@mui/material";
import LoginPic from "assets/img/login-picture.png";
import { BodyMediumRegular } from "shared/typography/BodyMedium";
import { theme } from "styles/global-styles";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexGrow: 1,
  width: "100%",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const ImgLoginPage = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundImage: `url(${LoginPic})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "40%",
  flexGrow: 1,

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "40%",
  },
}));

export const Aside = styled("aside")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 15%",
  width: "60%",
  flexGrow: 1,
  gap: "2rem",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "0 15%",
    height: "60%",
  },
}));

export const LogoImgStyled = styled("img")(() => ({
  width: "10.5rem",
  marginBottom: "0.5rem",
}));

export const AlignItems = styled("div")(() => ({
  padding: "0rem 1rem",

  [theme.breakpoints.up("md")]: {
    padding: "0rem",
  },
}));

export const IconStyles = {
  width: "1.75rem",
  color: theme.palette.tertiary.main,
};

export const BodyMediumRegularStyled = styled(BodyMediumRegular)(() => ({
  opacity: "0.6",
  marginTop: "0.5rem",
}));

export const TextAlign = styled("div")(() => ({
  padding: "0 1rem",
}));
