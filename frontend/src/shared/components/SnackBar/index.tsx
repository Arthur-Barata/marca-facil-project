import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { Snackbar } from "@mui/material";
import { IStore } from "data";
import { hideSnackbar } from "data/snackbar/actions";

import { useSelector } from "react-redux";
import { SubtitleMedium } from "shared/typography/SubtitleMedium";
import { AlertStyled } from "./styles";

export const SnackBar = () => {
  const { error, severity, title } = useSelector(
    (store: IStore) => store.snackbar
  );

  return (
    <Snackbar
      open={error}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={5000}
      transitionDuration={0}
      onClose={() => hideSnackbar()}
    >
      <AlertStyled
        variant="filled"
        iconMapping={{ error: <ReportProblemIcon fontSize="inherit" /> }}
        severity={severity}
      >
        <SubtitleMedium>{title}</SubtitleMedium>
      </AlertStyled>
    </Snackbar>
  );
};
