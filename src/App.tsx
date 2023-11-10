import { FC } from "react";
import css from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Reviews from "./components/reviews/Reviews";

const App: FC = () => {
  return (
    <div>
      <Header />
      <div className={css.container}>
        <h1 className={css.title}>MobiHelp24</h1>
        <Hero />
        <Reviews />
      </div>
    </div>
  );
};

export default App;
