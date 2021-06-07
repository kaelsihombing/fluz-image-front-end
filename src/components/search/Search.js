import React from "react";
import styles from "./Search.module.css";
import background from "../../assets/headerImage.png";
import logo from "../../assets/logo.png";

const Search = () => {
  return (
    <div className={styles.search}>
      <img className={styles.image} src={background} alt="image"></img>
      <div className={styles.cover}>
        <img src={logo} className={styles.logo}></img>
        <form className={styles.form}>
          <input className={styles.input}></input>
          <button type="button" className={styles.button}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
