import "./App.css";
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import ROUTES from "./constants/routes";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import OneDayForecast from "./pages/OneDayForecast";
import { MainPageContext } from "./pages/MainPage";
import FurtherForecast from "./pages/FurtherForecast";

const App = () => {
  const { cityData: data } = useContext(MainPageContext);

  return (
    <div className="App">
      <MainPageContext.Provider value={{ cityData: data }}>
        <Routes>
          <Route path={ROUTES.MAIN_PAGE} exact element={<MainPage />} />
          <Route path={ROUTES.ONE_DAY_FORECAST+"/:index"} element={<OneDayForecast />}/>
          <Route path={ROUTES.FURTHER_FORECAST+"/:index"} element={<FurtherForecast />}/>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainPageContext.Provider>
    </div>
  );
};

export default App;
