import { FC, useEffect, useState } from "react";
import {
  DocumentData,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../api/firebase";
import css from "./Feedback.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Rating from "@mui/material/Rating";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

const Feedback: FC = () => {
  const [reviews, setReviews] = useState<DocumentData[]>([]);

  console.log("🚀  reviews:", reviews);
  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setReviews(
        snapshot.docs.map((document: DocumentData) => ({
          id: document.id,
          item: document.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      <div className={css.feedbackHeader}>
        <img className={css.feedbackHeaderImg} src="/feedback.png" alt="feedback" />
        <p className={css.feedbackHeaderText}>Ваші відгуки</p>
 
      {reviews?.length > 0 && (
        <Swiper
          spaceBetween={30}
          effect={"slide"}
          navigation={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          style={{
            // pointerEvents: "none",
            width: "90%",
            height: "auto",
          }}
          className="mySwiper"
        >
          {reviews.map((el) => (
            <SwiperSlide
              key={el.id}
              style={{ opacity: 1, pointerEvents: "none" }}
            >
              <div className={css.reviewsContainer}>
                <p className={css.reviewName}>{el.item.name}</p>
                <Rating name="read-only" value={el.item.rating} readOnly />
                <div className={css.reviewBody}>{el.item.review}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <button className={css.reviewButton}>Залишити свій відгук </button>
      </div>
    </>
  );
};

export default Feedback;
