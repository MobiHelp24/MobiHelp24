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
import { db } from "../../../api/firebase";
import { AiOutlineDelete } from "react-icons/ai";

import css from "./PriceList.module.css";

export default function PriceList(): JSX.Element {
  const [priceList, setPriceList] = useState<DocumentData[]>([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [description, setDescription] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [price, setPrice] = useState("");
  const [editPrice, setEditPrice] = useState("");

  const [usdRates, setUsdRates] = useState<DocumentData[]>([]);
  const [selectedUsdRate, setSelectedUsdRate] = useState(null);
  const [editUsdRate, setEditUsdRate] = useState(0);
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

    const usd = query(collection(db, "usd"), orderBy("usd", "asc"));
    onSnapshot(usd, (snapshot) => {
      setUsdRates(
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
      <div className={css.rateText}>
        {usdRates.map((el) => (
          <div key={el.id}>
            {selectedUsdRate === el.id ? (
              <>
                <span> Курс USD: </span>
                <input
                  type="number"
                  value={editUsdRate}
                  className={css.editUsdRate}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (/^\d*\.?\d*$/.test(inputValue)) {
                      setEditUsdRate(+e.target.value);
                    }
                  }}
                />{" "}
                <button
                  className="btnCancel"
                  onClick={() => setSelectedUsdRate(null)}
                >
                  Скасувати
                </button>{" "}
                <button
                  className="btnOk"
                  onClick={() => {
                    updateDoc(doc(db, "usd", el.id), {
                      usd: editUsdRate,
                    });
                    setEditUsdRate(0);
                    setSelectedUsdRate(null);
                  }}
                >
                  Зберегти
                </button>
              </>
            ) : (
              <div className={css.rateText}>
                <span> Курс USD: </span>
                <span>{el.item.usd} грн.</span>{" "}
                <button
                  title="Змінити курс"
                  className="btnOk"
                  type="button"
                  onClick={() => {
                    setSelectedUsdRate(el.id);
                    setEditUsdRate(el.item.usd);
                  }}
                >
                  Змінити курс
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={addPrice} name="add_price">
        <input
          className={css.descriptionInput}
          type="text"
          value={description}
          required
          placeholder="назва послуги"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className={css.priceInput}
          type="number"
          value={price}
          required
          placeholder="вартість $"
          onChange={(e) => {
            const inputValue = e.target.value;
            if (/^\d*\.?\d*$/.test(inputValue)) {
              setPrice(inputValue);
            }
          }}
        />
        <button className={css.addPriceButton} type="submit">
          Створити запис
        </button>
      </form>
      <br />
      <div>
        {priceList.map((el) => (
          <div key={el.id}>
            <button
              title="Видалити"
              className={css.deleteButton}
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
                  className={css.descriptionInput}
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <input
                  className={css.priceInput}
                  type="number"
                  value={editPrice}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (/^\d*\.?\d*$/.test(inputValue)) {
                      setEditPrice(e.target.value);
                    }
                  }}
                />{" "}
                <button
                  className="btnCancel"
                  onClick={() => setSelectedPrice(null)}
                >
                  Скасувати
                </button>{" "}
                <button
                  className="btnOk"
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
                <hr />
              </>
            ) : (
              <>
                <span>{el.item.description}</span>
                {" - "}
                <span>{el.item.price}$</span>{" "}
                <button
                  className="btnOk"
                  title="Редагувати"
                  type="button"
                  onClick={() => {
                    setSelectedPrice(el.id);
                    setEditDescription(el.item.description);
                    setEditPrice(el.item.price);
                  }}
                >
                  Редагувати
                </button>
                <hr />
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
