import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Montserrat } from "styles/common";

export const StyledTitleMediumTypography = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    font: `700 1rem ${Montserrat}`,

    [theme.breakpoints.up("sm")]: {
      font: `500 1rem ${Montserrat}`,
    },
  })
);
