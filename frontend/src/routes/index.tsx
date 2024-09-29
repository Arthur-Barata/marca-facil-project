import { App } from "App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesEnum } from "./enum";

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.Home} element={<App />}>
          <Route index /*element={<HomePage/>}*/ />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
