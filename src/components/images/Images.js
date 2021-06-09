import React, { useState, useRef, useCallback } from "react";
import styles from "./Images.module.css";
import useSearch from "../../hooks/useSearch";

const Images = (props) => {
  const [page, setPage] = useState(1);

  const { loading, error, images, hasMore } = useSearch(props.tag, page);

  const observer = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("Visible...");
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
      console.log("Node....", node);
    },
    [loading, hasMore]
  );

  return (
    <>
      {/* <input type="text" value={tag} onChange={handleSearch}></input> */}
      <div className={styles.images}>
        {images.map((image, index) => {
          if (images.length === index + 1) {
            console.log("RESULT: ", images.length, index + 1);
            return (
              <div
                ref={lastElementRef}
                key={image}
                className={styles.container}
              >
                <span>
                  <a rel="noreferrer" target="_blank" href={image}>
                    <img
                      alt="flickr"
                      className={styles.image}
                      src={image}
                    ></img>
                  </a>
                </span>
              </div>
            );
          } else {
            return (
              <div key={image} className={styles.container}>
                <span>
                  <a rel="noreferrer" target="_blank" href={image}>
                    <img
                      alt="flickr"
                      className={styles.image}
                      src={image}
                    ></img>
                  </a>
                </span>
              </div>
            );
          }
        })}
      </div>
      {loading && (
        <div className={styles.info}>
          <h1>Loading...</h1>
        </div>
      )}
      {error && (
        <div className={styles.info}>
          <h1>No image...</h1>
        </div>
      )}
    </>
  );
};

export default Images;
