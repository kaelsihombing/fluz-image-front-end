import React, { useState, useEffect } from "react";
import styles from "./Images.module.css";
import axios from "axios";

const Images = (props) => {
  console.log("1. ", props.tag);
  const [images, setImages] = useState([]);
  const [tag, setTag] = useState(props.tag);
  const [page, setPage] = useState();
  const [perPage, setPerPage] = useState();

  if (tag != props.tag) {
    setTag(props.tag);
  }

  const getImage = () => {
    axios
      .get(`https://fluz-image-back-end.herokuapp.com/api/v1/images`, {
        params: {
          tag: props.tag,
          page: props.page,
          perPage: props.perPage,
        },
      })
      .then((response) => {
        // console.log(response.data.data);
        setImages(response.data.data);
      });
  };

  useEffect(() => {
    console.log("here");
    getImage();
  }, [tag]);

  return (
    <div className={styles.images}>
      {images &&
        images.map((image, index) => (
          <div key={index} className={styles.container}>
            <span>
              <img className={styles.image} src={image}></img>
            </span>
          </div>
        ))}
    </div>
  );
};

export default Images;
