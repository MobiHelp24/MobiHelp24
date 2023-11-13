import React, { useEffect, useState } from "react";
import {
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../api/firebase";
import { AiOutlineDelete } from "react-icons/ai";

import css from "./PriceList.module.css";

export default function PriceList(): JSX.Element {
  const [priceList, setPriceList] = useState<DocumentData[]>([]);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const [description, setDescription] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [price, setPrice] = useState("");
  const [editPrice, setEditPrice] = useState("");
  useEffect(() => {
    const q = query(collection(db, "price"), orderBy("description", "asc"));
    onSnapshot(q, (snapshot) => {
      setPriceList(
        snapshot.docs.map((document: DocumentData) => ({
          id: document.id,
          item: document.data(),
        }))
      );
    });
  }, []);

  const addPrice = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    addDoc(collection(db, "price"), {
      description,
      price: +price,
    });
    setDescription("");
    setPrice("");
  };

  return (
    <>
      <form onSubmit={addPrice} name="add_price">
        <input
          type="text"
          value={description}
          required
          placeholder="назва послуги"
          onChange={(e) => setDescription(e.target.value)}
        />
        {" "}
        <input
          type="number"
          value={price}
          required
          placeholder="вартість послуги"
          onChange={(e) => {
            const inputValue = e.target.value;
            if (/^\d*\.?\d*$/.test(inputValue)) {
              setPrice(inputValue);
            }
          }}
        />
        <button className={css.addPriceButton} type="submit">Створити запис</button>
      </form>

      <div>
        {priceList.map((el) => (
          <div key={el.id}>
            <button
              title="Видалити"
              className="deleteButton"
              type="button"
              onClick={() => {
                deleteDoc(doc(db, "price", el.id));
              }}
            >
              <AiOutlineDelete />
            </button>{" "}
            {selectedPrice === el.id ? (
              <>
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <input
                  type="number"
                  value={editPrice}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (/^\d*\.?\d*$/.test(inputValue)) {
                      setEditPrice(e.target.value);
                    }
                  }}
                />{" "}
                <button onClick={() => setSelectedPrice(null)}>Скасувати</button>{" "}
                <button
                  onClick={() => {
                    updateDoc(doc(db, "price", el.id), {
                      description: editDescription,
                      price: editPrice,
                    });
                    setEditDescription("");
                    setSelectedPrice(null);
                  }}
                >
                  Зберегти
                </button>
              </>
            ) : (
              <>
                <span className="task">{el.item.description}</span>
                <span className="task">{el.item.price}</span>{" "}
                <button
                  title="Edit"
                  className="editButton"
                  type="button"
                  onClick={() => {
                    setSelectedPrice(el.id);
                    setEditDescription(el.item.description);
                    setEditPrice(el.item.price);
                  }}
                >
                  Редагувати
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
