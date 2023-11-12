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
      {/* <div className={styles.reviewsContainer}>
        <div className={styles.reviewListContainer}>
          {reviews.map((el) => (
            <div key={el.id} className={styles.reviewContainer}>
              <p className={styles.reviewName}>{el.item.name}</p>
              <div className={styles.reviewBody}>{el.item.review}</div>
            </div>
          ))}
        </div>
      </div> */}

      {reviews?.length > 0 && (
        <Swiper
          spaceBetween={30}
          effect={"slide"}
          // effect={"coverflow"}
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
                <div className={css.reviewBody}>{el.item.review}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Feedback;