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

import css from "./VideoAdmin.module.css";

export default function VideoAdmin(): JSX.Element {
  const [videoList, setVideoList] = useState<DocumentData[]>([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [description, setDescription] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [link, setLink] = useState("");
  const [editLink, setEditLink] = useState("");

  useEffect(() => {
    const q = query(collection(db, "video"), orderBy("description", "asc"));
    onSnapshot(q, (snapshot) => {
      setVideoList(
        snapshot.docs.map((document: DocumentData) => ({
          id: document.id,
          item: document.data(),
        }))
      );
    });
  }, []);

  const addVideo = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    addDoc(collection(db, "video"), {
      description,
      link,
    });
    setDescription("");
    setLink("");
  };

  return (
    <>
      <form onSubmit={addVideo} name="add_video">
        <input
          className={css.descriptionInput}
          type="text"
          value={description}
          required
          placeholder="назва відео"
          onChange={(e) => setDescription(e.target.value)}
        />{" "}
        <input
          className={css.linkInput}
          type="text"
          value={link}
          required
          placeholder="посилання на відео"
          onChange={(e) => setLink(e.target.value)}
        />
        <button className={css.addButton} type="submit">
          Створити запис
        </button>
      </form>
      <br />
      <div>
        {videoList.map((el) => (
          <div key={el.id}>
            <button
              title="Видалити"
              className={css.deleteButton}
              type="button"
              onClick={() => {
                deleteDoc(doc(db, "video", el.id));
              }}
            >
              <AiOutlineDelete />
            </button>{" "}
            {selectedVideo === el.id ? (
              <>
                <input
                  className={css.descriptionInput}
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <input
                  className={css.linkInput}
                  type="text"
                  value={editLink}
                  onChange={(e) => {
                    setEditLink(e.target.value);
                  }}
                />{" "}
                <button
                  className="btnCancel"
                  onClick={() => setSelectedVideo(null)}
                >
                  Скасувати
                </button>{" "}
                <button
                  className="btnOk"
                  onClick={() => {
                    updateDoc(doc(db, "video", el.id), {
                      description: editDescription,
                      price: editLink,
                    });
                    setEditDescription("");
                    setSelectedVideo(null);
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
                <span>{el.item.link}</span>{" "}
                <button
                  className="btnOk"
                  title="Редагувати"
                  type="button"
                  onClick={() => {
                    setSelectedVideo(el.id);
                    setEditDescription(el.item.description);
                    setEditLink(el.item.link);
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
