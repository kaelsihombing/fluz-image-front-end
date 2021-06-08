import React, { useState, useRef, useCallback } from "react";
import styles from "./Images.module.css";
import axios from "axios";
import useSearch from "../../hooks/useSearch";

const Images = (props) => {
  // console.log("1. ", props.tag);
  // const [images, setImages] = useState([]);
  // const [tag, setTag] = useState(props.tag);
  // const [page, setPage] = useState();
  // const [perPage, setPerPage] = useState();

  // if (tag != props.tag) {
  //   setTag(props.tag);
  // }

  // const getImage = () => {
  //   axios
  //     .get(`https://fluz-image-back-end.herokuapp.com/api/v1/images`, {
  //       params: {
  //         tag: props.tag,
  //         page: props.page,
  //         perPage: props.perPage,
  //       },
  //     })
  //     .then((response) => {
  //       // console.log(response.data.data);
  //       setImages(response.data.data);
  //     });
  // };

  // useEffect(() => {
  //   console.log("here");
  //   getImage();
  // }, [tag]);

  // return (
  //   <div className={styles.images}>
  //     {images &&
  //       images.map((image, index) => (
  //         <div key={index} className={styles.container}>
  //           <span>
  //             <img className={styles.image} src={image}></img>
  //           </span>
  //         </div>
  //       ))}
  //   </div>
  // );
  const [tag, setTag] = useState("");
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
                  <img className={styles.image} src={image}></img>
                </span>
              </div>
            );
          } else {
            return (
              <div key={image} className={styles.container}>
                <span>
                  <a target="_blank" href={image}>
                    <img className={styles.image} src={image}></img>
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
