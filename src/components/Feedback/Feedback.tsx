import { FC, useEffect, useState } from "react";
import {
  DocumentData,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../api/firebase";
import styles from "./feedback.module.css";

const Feedback: FC = () => {
  const [reviews, setReviews] = useState<DocumentData[]>([]);
  const q = query(collection(db, "reviews"), orderBy("timestamp", "desc"));
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setReviews(
        snapshot.docs.map((document: DocumentData) => ({
          id: document.id,
          item: document.data(),
        }))
      );
    });
  }, [q]);

  return (
    <div className={styles.reviewsContainer}>
      <div className={styles.reviewListContainer}>
        {reviews.map((el) => (
          <div key={el.id} className={styles.reviewContainer}>
            <p className={styles.reviewName}>{el.item.name}</p>
            <div className={styles.reviewBody}>{el.item.review}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
