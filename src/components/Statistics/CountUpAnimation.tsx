import { useInView } from "react-intersection-observer";
import css from "./Statistics.module.css";
import { useSpring, animated } from "react-spring";
interface IStat {
  endValue: number;
}

const CountUpAnimation = ({ endValue }: IStat) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? endValue : 0 },
    config: { duration: 4000 },
  });

  return (
    <animated.span ref={ref} className={css.circle}>
      {number.to((val) => Math.floor(val))}
    </animated.span>
  );
};

export default CountUpAnimation;
