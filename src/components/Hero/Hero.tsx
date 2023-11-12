import { FC } from "react";
import css from "./Hero.module.css";

const Hero: FC = () => {
  return (
    <div className={css.hero}>
      <div className={css.main_hero}>
        <div className={css.cards_container}>
          <ul className={css.list_cards}>
            <li className={css.cards}>
              <h3 className={css.cards_title}>Оригінальні запчастини</h3>
              <p className={css.small_title}>
                Фірмові комплектуючі, від перевірених постачальників
              </p>
            </li>
            <li className={css.cards}>
              <h3 className={css.cards_title}>Терміновий ремонт</h3>
              <p className={css.small_title}>
                В більшості випадків отримаєте телефон протягом того ж дня{" "}
              </p>
            </li>
          </ul>
          <ul className={css.list_cards_2}>
            <li className={css.cards}>
              <h3 className={css.cards_title}>Гарантія роботи</h3>
              <p className={css.small_title}>
                Ми гарантуємо 100% функціональність вашого пристрою після
                ремонту
              </p>
            </li>
          </ul>
        </div>
        <div>
          <iframe
            className={css.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2642.041691933035!2d35.86823717602799!3d48.532432723590475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40deb832ff768cef%3A0xa2257eb0cc725aee!2z0YPQuy4g0KHQvtCx0L7RgNC90LDRjywgOTMsINCf0LDQstC70L7Qs9GA0LDQtCwg0JTQvdC10L_RgNC-0L_QtdGC0YDQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0LjQvdCwLCA1MTQwMA!5e0!3m2!1sru!2sde!4v1699815757123!5m2!1sru!2sde"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hero;
