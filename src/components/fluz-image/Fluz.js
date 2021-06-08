import React, { useState } from "react";
import Images from "../images/Images";
import Search from "../search/Search";
import styles from "./Fluz.module.css";

const Fluz = (props) => {
  const [tag, setTag] = useState("landscape, colorfull");
  const [perPage, setPerpage] = useState(66);
  const [page, setPage] = useState(1);

  const onSearchClickedhandler = (tags) => {
    console.log("clicked...", tags);

    setTag(tags);
  };

  return (
    <div className={styles.container}>
      <Search onSearchClicked={onSearchClickedhandler}></Search>
      <Images tag={tag} page={page} perPage={perPage}></Images>
    </div>
  );
};

export default Fluz;
