import { Card, styled } from "@mui/material";

export const CardStyled = styled(Card)(({ theme }) => ({
  maxWidth: 270,
  maxHeight: 400,
  backgroundColor: "#F0F1F2",
  borderRadius: "1rem",

  "&.MuiPaper-root": {
    minHeight: 400,
  },
}));
