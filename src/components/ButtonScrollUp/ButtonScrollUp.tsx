import css from "./ButtonScrollUp.module.css";
import { useState, useEffect, FC } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

const ButtonScrollUp: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 756) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`${css.scroll_to_top} ${isVisible ? css.visible : ""}`}>
      <button onClick={scrollToTop}>
        <BsArrowUpCircle size={32} />
      </button>
    </div>
  );
};

export default ButtonScrollUp;
