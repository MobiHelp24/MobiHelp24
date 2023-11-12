import { ChangeEvent, FC, useEffect, useState } from "react";
import css from "./Video.module.css";
import {
  DocumentData,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../api/firebase";
import { Pagination } from "@mui/material";

const Video: FC = () => {
  const [videoLinks, setVideoLinks] = useState<DocumentData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsOnPage = 3;
  const startIdx = (currentPage - 1) * itemsOnPage;
  const endIdx = startIdx + itemsOnPage;

  useEffect(() => {
    const q = query(collection(db, "video"), orderBy("link", "desc"));
    onSnapshot(q, (snapshot) => {
      setVideoLinks(
        snapshot.docs.map((document: DocumentData) => ({
          id: document.id,
          item: document.data(),
        }))
      );
    });
  }, []);

  const getAnotherPage = (_: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <section className={css.video}>
      <div className={`${css.video_section} container`}>
        <div>
          <h2 className={css.video_title}>Наші видео</h2>
        </div>

        <ul className={css.cards_list}>
          {videoLinks.length === 0
            ? "loading"
            : videoLinks
                .map(({ item, id }) => (
                  <li className={css.card_video} key={id}>
                    <iframe
                      className={css.youtube}
                      src={item.link}
                      title={item.description}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                    <p>
                      {item.description.length > 36
                        ? `${item.description.substring(0, 36)}...`
                        : item.description}
                    </p>
                  </li>
                ))
                .slice(startIdx, endIdx)}
        </ul>
        <div className={css.pagination}>
          <Pagination
            count={Math.ceil(videoLinks.length / itemsOnPage)}
            page={currentPage}
            size="large"
            onChange={getAnotherPage}
          />
        </div>
      </div>
    </section>
  );
};

export default Video;
