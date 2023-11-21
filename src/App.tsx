import { FC } from "react";
import Hero from "./components/Hero/Hero";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./components/Admin/AdminPage";
import ButtonScrollUp from "./components/ButtonScrollUp/ButtonScrollUp";

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path={`${import.meta.env.VITE_REACT_APP_ROUTE}`}
          element={<AdminPage />}
        />
      </Routes>
      <ButtonScrollUp />
    </div>
  );
};

export default App;
