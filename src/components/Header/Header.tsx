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
        <TfiTime />
        <span>ПН-ПТ 8:00 - 17:00</span>
      </div>
      <div className={css.contacts}>
        <span>
          <CiLocationOn />
          адрес потом допишим
        </span>
        <a href="tel:+380961111111">+38 096 111 11 11</a>
      </div>
      <div className={css.social_media}>
        <a href="#">
          <PiInstagramLogoThin />
        </a>
        <a href="#">
          <PiTelegramLogoThin />
        </a>
      </div>
    </header>
  );
};

export default Header;
