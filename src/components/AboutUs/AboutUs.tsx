import { FC } from "react";
import css from "./AboutUs.module.css";
import phones from "/phone1.png";
import { MdOutlinePhonelinkSetup } from "react-icons/md";
import { GiButtonFinger, GiCharging } from "react-icons/gi";
import { IoBatteryCharging, IoWaterOutline } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { MdOutlineWeb } from "react-icons/md";

const whatWeDo = [
  {
    id: 1,
    title: "Заміна екрана",
    description:
      "Тріснуте скло/тачскрін, потемніння, сенсорний екран не реагує, знебарвлення екрана",
    icon: <MdOutlinePhonelinkSetup size="2rem" color="red" />,
  },
  {
    id: 2,
    title: "Ремонт кнопок",
    description:
      'Кнопка блокування не реагує, кнопки збільшення і зменшення гучності або кнопка "Додому" не працюють правильно',
    icon: <GiButtonFinger size="2rem" color="red" />,
  },
  {
    id: 3,
    title: "Заміна батареї",
    description:
      "Ви заряджаєте свій пристрій частіше, ніж зазвичай, а батарея сідає швидше і швидше.",
    icon: <IoBatteryCharging size="2rem" color="red" />,
  },
  {
    id: 4,
    title: "Ремонт зарядного порту",
    description:
      "Наприклад, ви підключили до свого телефону зарядний пристрій, але смартфон не заряджається.",
    icon: <GiCharging size="2rem" color="red" />,
  },
  {
    id: 5,
    title: "Ремонт динамика/микрофона",
    description:
      "Ніхто не чує вас по телефону? Або ви не чуєте співрозмовника? Глухий звук, музика не грає належним чином.",
    icon: <IoMdMic size="2rem" color="red" />,
  },
  {
    id: 6,
    title: "Залиті телефони",
    description:
      "Ми можемо оживити телефон, який піддавався впливу вологи, або був залитий якоюсь рідиною",
    icon: <IoWaterOutline size="2rem" color="red" />,
  },
];

const AboutUs: FC = () => {
  return (
    <div className={css.about}>
      <h2 className={css.about_main_title}>Чим ми займаємося</h2>
      <div className={css.about_container}>
        <ul className={css.list_container}>
          {whatWeDo.map(({ title, description, icon, id }) =>
            id < 4 ? (
              <li key={id} className={css.item_li}>
                <div className={css.list_div}>
                  <strong>
                    <span className={css.title}>{title}</span>
                  </strong>
                  {icon}
                </div>
                <p className={css.description}>{description}</p>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
        <div className={css.phone_container}>
          <img className={css.phone} src={phones} alt="phones" loading="lazy" />

          <span className={`${css.phone_siute}`}>
            <MdOutlineWeb size="2rem" color="red" />
            <strong>Розробка сайтів</strong>
            <p className={css.phone_title}>
              Створюємо індивідуальні та ефективні веб-сайти з унікальним
              дизайном та функціоналом.
            </p>
          </span>
        </div>
        <ul className={css.list_container2}>
          {whatWeDo.map(({ title, description, icon, id }) =>
            id > 3 ? (
              <li key={id} className={css.item_li}>
                <div className={css.list_div2}>
                  <strong>
                    <span className={css.title}>{title}</span>
                  </strong>
                  {icon}
                </div>
                <p className={css.description2}>{description}</p>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
