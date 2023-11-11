import { FC } from "react";
import css from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Feedback from "./components/Feedback/Feedback";
import NewFeedback from "./components/Feedback/NewFeedback";

const App: FC = () => {
  return (
    <div className={css.container}>
      <Header />
      <h1 className={css.title}>MobiHelp24</h1>
      <Hero />
      {/* <Reviews /> */}
      <hr />
      <Feedback />
      <hr />
      <NewFeedback />
    </div>
  );
};

export default App;
