import { FC } from "react";
import css from "./App.module.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Feedback from "./components/Feedback/Feedback";
import NewFeedback from "./components/Feedback/NewFeedback";

import Video from "./components/Video/Video";
import PriceList from "./components/Price/PriceList";
import PriceService from "./components/PriceService/PriceService";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Video />
      <div className={css.container}>
        {/* <Reviews /> */}
        <hr />
        <Feedback />
        <hr />
        <NewFeedback />
        <br />
        <PriceService />
        <hr />
        <PriceList />
      </div>
    </div>
  );
};

export default App;
