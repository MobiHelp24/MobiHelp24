import { FC } from "react";
import css from "./Footer.module.css";
import { MdAccessTime } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { PiInstagramLogoThin } from "react-icons/pi";
import { BiLogoTelegram } from "react-icons/bi";
import logoPng from "/logo2.png";
import { SiViber } from "react-icons/si";

const Footer: FC = () => {
  return (
    <footer className={css.footer}>
      <h2 className={`${css.main_footer_title} container`}>
        Забезпечення швидкого та ефективного ремонту
      </h2>
      <div className={`${css.container_footer} container`}>
        <div className={css.logo_container}>
          <img src={logoPng} alt="logo" className={css.logo} />
          <span className={css.logo_title}>MobiHelp24</span>
        </div>
        <div className={css.footer_info}>
          <div className={css.work_time}>
            <MdAccessTime className={css.footer_icons} />
            <span className={css.footer_title}>ПН-ПТ 8:00 - 17:00</span>
          </div>
          <div className={css.contacts}>
            <span className={css.address}>
              <IoLocationSharp className={css.footer_icons} />
              <div className={css.contacts}>
                <span className={css.footer_title}>м. Павлоград </span>
                <span className={css.footer_title}>вул. Соборна 93/3</span>
              </div>
            </span>
          </div>
          <div className={css.social_media}>
            <a
              href="https://instagram.com/mobihelp24dp?utm_source=qr"
              target="_blank"
            >
              <PiInstagramLogoThin className={css.social_media_icon} />
            </a>
            <a href="https://t.me/Benya2320" target="_blank">
              <BiLogoTelegram
                className={` ${css.social_media_icon_telegram}`}
              />
            </a>
            <a href="viber://chat?number=%2B380958269769" target="_blank">
              <SiViber className={css.social_media_icon_viber} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
