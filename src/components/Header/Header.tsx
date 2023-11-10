import { FC } from "react";
import css from "./Header.module.css";
import { TfiTime } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { PiInstagramLogoThin, PiTelegramLogoThin } from "react-icons/pi";

const Header: FC = () => {
  return (
    <header className={css.header}>
      <a>Logo</a>
      <div>
        <TfiTime size="1.5rem" />
        <span>ПН-ПТ 8:00 - 17:00</span>
      </div>
      <div className={css.contacts}>
        <span>
          <CiLocationOn size="1.9rem" />
          м.Павлоград вул. Соборна 93/3
        </span>
        Телефон
        <a href="tel:+380958269769">+38 (095) 826-97-69</a>
        <a href="tel:+380996660769">+38 (099) 666-07-69</a>
      </div>
      <div className={css.social_media}>
        <a href="#">
          <PiInstagramLogoThin size="3rem" />
        </a>
        <a href="#">
          <PiTelegramLogoThin size="3rem" />
        </a>
      </div>
    </header>
  );
};

export default Header;
