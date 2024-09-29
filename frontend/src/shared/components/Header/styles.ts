import { Box, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderOptionsContainer = styled("div")(({ theme }) => ({
  maxWidth: "529px",
  display: "flex",
  gap: "2rem",
  height: "100%",

  span: {
    cursor: "pointer",
    padding: "0.3rem",
  },

  "span:hover": {
    borderRadius: "0.3rem",
    backgroundColor: "rgba(255,255,255,0.1)",
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const ToolBarStyled = styled(Toolbar)(() => ({
  justifyContent: "space-between",
}));

export const MenuBoxStyled = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const PerfilBoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
}));

export const ProfileBoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
}));
