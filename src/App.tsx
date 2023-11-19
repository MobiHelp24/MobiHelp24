import { FC } from "react";
import Hero from "./components/Hero/Hero";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./components/Admin/AdminPage";

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="222" element={<AdminPage />} />
      </Routes>
    </div>
  );
};

export default App;
