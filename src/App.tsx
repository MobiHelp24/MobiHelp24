import { FC } from "react";
import css from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const App: FC = () => {
  return (
    <div className={css.container}>
      <Header />
      <h1 className={css.title}>MobiHelp24</h1>
      <Hero />
    </div>
  );
};

export default App;
