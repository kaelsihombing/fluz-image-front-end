import React, { useState } from "react";
import Images from "../images/Images";
import Search from "../search/Search";
import styles from "./Fluz.module.css";

const Fluz = (props) => {
  const [tag, setTag] = useState("landscape");
  const [page, setPage] = useState(1);

  const onSearchClickedHandler = (tags) => {
    console.log("clicked...", tags);

    setTag(tags);
    setPage(1);
  };

  return (
    <div className={styles.container}>
      <Search onSearchClicked={onSearchClickedHandler}></Search>
      <Images tag={tag} page={page}></Images>
    </div>
  );
};

export default Fluz;
