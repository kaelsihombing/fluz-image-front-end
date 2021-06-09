import React, { useState } from "react";
import styles from "./Search.module.css";
// import background from "../../assets/headerImage.png";
import logo from "../../assets/logo.png";

const Search = (props) => {
  const [enteredTags, setEnteredTags] = useState();

  const tagsChangeHandler = (event) => {
    setEnteredTags(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSearchClicked(enteredTags);
  };

  return (
    <div className={styles.search}>
      <div className={styles.cover}>
        <img alt="logo" src={logo} className={styles.logo}></img>
        <form onSubmit={submitHandler} className={styles.form}>
          <input
            value={enteredTags}
            onChange={tagsChangeHandler}
            className={styles.input}
          ></input>
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
