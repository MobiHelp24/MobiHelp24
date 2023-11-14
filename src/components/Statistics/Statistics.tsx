import { FC } from "react";
import css from "./Statistics.module.css";
import CountUpAnimation from "./CountUpAnimation";
import AnimatedCounter from "./AnimatedCounter";

const Statistics: FC = () => {
  const one = 8043;
  const two = 7404;
  const tree = 4528;
  const four = 11634;

  return (
    <div className={css.statistic}>
      <div>
        <h2 className={css.statistic_title}>Статистика ремонту</h2>
      </div>
      <ul className={css.cards_list}>
        <li className={css.card}>
          <p className={css.card_title}> Задоволених кліентів</p>
          <AnimatedCounter value={one} />
          <span className={css.card_number}>
            <CountUpAnimation endValue={one} />
          </span>
        </li>
        <li className={css.card}>
          <p className={css.card_title}>Замінено захисних плівок</p>
          <AnimatedCounter value={two} />
          <span className={css.card_number}>
            <CountUpAnimation endValue={two} />
          </span>
        </li>
        <li className={css.card}>
          <p className={css.card_title}>Ремонтів після залиття водою </p>
          <AnimatedCounter value={tree} />
          <span className={css.card_number}>
            <CountUpAnimation endValue={tree} />
          </span>
        </li>
        <li className={css.card}>
          <p className={css.card_title}>Годин ремонту за 6 років</p>
          <AnimatedCounter value={four} />
          <span className={css.card_number}>
            <CountUpAnimation endValue={four} />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
