import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../api/firebase";
import { TextField } from "@mui/material";
import css from "./NewFeedback.module.css";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels: { [index: string]: string } = {
  0: "Без оцінки",
  1: "Дуже погано",
  2: "Погано",
  3: "Середньо",
  4: "Добре",
  5: "Відмінно!",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function NewFeedback(): JSX.Element {
  const [inputName, setInputName] = useState("");
  const [inputReview, setInputReview] = useState("");
  const [inputRating, setInputRating] = useState<number | null>(0);
  const [hover, setHover] = useState(-1);

  const addReview = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    addDoc(collection(db, "reviews"), {
      review: inputReview,
      name: inputName,
      rating: inputRating,
      timestamp: serverTimestamp(),
    });
    setInputName("");
    setInputReview("");
    setInputRating(0);
  };

  return (
    <div className={css.reviewsContainer}>
      <form onSubmit={addReview} name="add_review" className={css.reviewForm}>
        <TextField
          className={css.inputName}
          required
          id="reviewName"
          value={inputName}
          maxRows={1}
          label="Розкажіть про себе"
          variant="standard"
          onChange={(e) => setInputName(e.target.value)}
        />

        <div className={css.inputRating}>
          <p>Оцініть нашу співпрацю</p>
          <Rating
            name="hover-feedback"
            value={inputRating}
            precision={1}
            getLabelText={getLabelText}
            onChange={(_, newValue) => {
              setInputRating(newValue);
            }}
            onChangeActive={(_, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {inputRating !== null && (
            <Box sx={{ ml: 2 }}>
              {labels[hover !== -1 ? hover : inputRating]}
            </Box>
          )}
        </div>

        <textarea
          className={css.inputReview}
          required
          placeholder="Залиште Ваш відгук"
          maxLength={300}
          onChange={(e) => setInputReview(e.target.value)}
          value={inputReview}
        />
        <br />
        <button className={css.reviewButton} type="submit">
          Відправити
        </button>
      </form>
    </div>
  );
}