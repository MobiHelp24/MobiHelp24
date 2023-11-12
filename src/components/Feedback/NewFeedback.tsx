import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../api/firebase";
import { TextField } from "@mui/material";
import styles from "./NewFeedback.module.css";

export default function NewFeedback(): JSX.Element {
  const [inputName, setInputName] = useState("");
  const [inputReview, setInputReview] = useState("");
  const [imgLink, setImgLink] = useState("");

  const addReview = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    getImgLinkFetch();
    addDoc(collection(db, "reviews"), {
      review: inputReview,
      name: inputName,
      link: imgLink,
      timestamp: serverTimestamp(),
    });
    setInputName("");
    setInputReview("");
  };

  async function getImgLinkFetch() {
    setImgLink(
      "https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg"
    );
  }

  return (
    <div className={styles.reviewsContainer}>
      <form
        onSubmit={addReview}
        name="add_review"
        className={styles.reviewForm}
      >
        <TextField
          required
          id="reviewName"
          value={inputName}
          label="Tell us about yourself"
          variant="standard"
          onChange={(e) => setInputName(e.target.value)}
        />
        <br />
        <textarea
          className={styles.inputReview}
          required
          placeholder="Leave your review here.."
          onChange={(e) => setInputReview(e.target.value)}
          value={inputReview}
        />
        <br />
        <button className={styles.reviewButton} type="submit">
          Add review
        </button>
      </form>
    </div>
  );
}
// import { FC } from "react";

// const NewFeedback: FC = () => {
//   return <div></div>;
// };

// export default NewFeedback;
