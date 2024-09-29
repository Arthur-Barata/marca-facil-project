import { Box, styled } from "@mui/material";

export const LabPageBody = styled(Box)(() => ({
  width: "100%",
}));

export const CardsContainer = styled(Box)(() => ({
  width: "100%",
  padding: "1rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
  gridGap: "20px",
  alignItems: "start",
}));

export const TitleBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
  gap: "1rem",
}));
