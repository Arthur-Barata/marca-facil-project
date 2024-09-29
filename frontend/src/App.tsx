import { Outlet } from "react-router-dom";
import { AppStyles } from "styles/app-styles";

export const App: React.FC = () => {
  return (
    <AppStyles>
      <Outlet />
    </AppStyles>
  );
};
