import { FC } from "react";
import css from "./Header.module.css";
import { MdAccessTime } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { PiInstagramLogoThin, PiTelegramLogoThin } from "react-icons/pi";

const Header: FC = () => {
  return (
    <header className={css.header}>
      <div className={css.header_background}>
        <div className={`${css.container_header} container`}>
          <div className={css.main_container}>
            <div className={css.logo_container}>
              <a className={css.logo}>MobiHelp24</a>
            </div>

            <div className={css.info}>
              <div className={css.info_other}>
                <div>
                  <div className={css.work_time}>
                    <MdAccessTime className={css.header_icons} />
                    <span className={css.header_title}>ПН-ПТ 8:00 - 17:00</span>
                  </div>

                  <div className={css.contacts}>
                    <span className={css.address}>
                      <IoLocationSharp className={css.header_icons} />
                      <div className={css.contacts}>
                        <span className={css.header_title}>м.Павлоград </span>
                        <span className={css.header_title}>
                          вул.Соборна 93/3
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className={css.phone}>
                  <span className={css.header_title}>Телефон</span>

                  <a href="tel:+380958269769" className={css.header_title}>
                    +38 (095) 826-97-69
                  </a>
                  <a href="tel:+380996660769" className={css.header_title}>
                    +38 (099) 666-07-69
                  </a>
                </div>
              </div>
              <div className={css.social_media}>
                <a
                  href="https://instagram.com/mobihelp24dp?utm_source=qr"
                  target="_blank"
                >
                  <PiInstagramLogoThin className={css.social_media_icon} />
                </a>
                <a href="https://t.me/Benya2320" target="_blank">
                  <PiTelegramLogoThin className={css.social_media_icon} />
                </a>
              </div>
            </div>
          </div>
          <h1 className={css.main_title}>
            Швидко, якісно, краща ціна - ваш телефон у надійних руках
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
