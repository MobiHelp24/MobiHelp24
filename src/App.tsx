import { FC } from "react";
import css from "./App.module.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Feedback from "./components/Feedback/Feedback";
import NewFeedback from "./components/Feedback/NewFeedback";
import Video from "./components/Video/Video";
import PriceService from "./components/PriceService/PriceService";
import AdminPage from "./components/Admin/AdminPage";
import Statistics from "./components/Statistics/Statistics";
import Footer from "./components/Footer/Footer";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Video />
      <div className={css.container}>
        {/* <Reviews /> */}
        <Statistics />
        <hr />
        <Feedback />
        <hr />
        <NewFeedback />
        <br />
        <PriceService />
        <hr />
        <AdminPage />
      </div>
      <Footer />
    </div>
  );
};

export default App;
