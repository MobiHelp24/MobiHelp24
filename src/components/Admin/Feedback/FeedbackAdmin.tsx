import { useEffect, useState } from "react";
import {
  DocumentData,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../../api/firebase";
import { AiOutlineDelete } from "react-icons/ai";
import css from "./FeedbackAdmin.module.css";
import { Rating } from "@mui/material";

export default function FeedbackAdmin(): JSX.Element {
  const [reviws, setReviews] = useState<DocumentData[]>([]);

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
      <div>
        {reviws.map((el) => (
          <div key={el.id}>
            <button
              title="Видалити"
              className={css.deleteButton}
              type="button"
              onClick={() => {
                deleteDoc(doc(db, "reviews", el.id));
              }}
            >
              <AiOutlineDelete />
            </button>{" "}
            <Rating name="read-only" value={el.item.rating} readOnly />
            <span className={css.reviewName}>{el.item.name}</span>
            <p className={css.feedbackText}>{el.item.review}</p>
            <hr/>
          </div>
        ))}
      </div>
    </>
  );
}
