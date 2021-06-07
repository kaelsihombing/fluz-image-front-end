import React from "react";
import styles from "./Images.module.css";
import zero from "../../assets/alejandro-contreras-wTPp323zAEw-unsplash.jpg";
import one from "../../assets/wexor-tmg-L-2p8fapOA8-unsplash.jpg";
import two from "../../assets/alexandru-rotariu-o_QTeyGVWjQ-unsplash.jpg";
import three from "../../assets/david-clode-7_TTPznVIQI-unsplash.jpg";
import four from "../../assets/deepak-nautiyal-Nbv7PkL_rvI-unsplash.jpg";
import five from "../../assets/edgar-nKC772R_qog-unsplash.jpg";
import six from "../../assets/gwen-weustink-I3C1sSXj1i8-unsplash.jpg";
import seven from "../../assets/hans-jurgen-mager-Fbdr6gXJBVY-unsplash.jpg";
import eight from "../../assets/jeremy-bishop-hppWAs2WTZU-unsplash.jpg";
import nine from "../../assets/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg";
import ten from "../../assets/mark-stoop-JAUFHzqZPd0-unsplash.jpg";
import eleven from "../../assets/maurits-bausenhart-QMRN_GX7p4I-unsplash.jpg";
import twelve from "../../assets/paweldotio-XWTNFVCTS8E-unsplash.jpg";
import thirteen from "../../assets/philip-swinburn-Z0tTnl_eOIo-unsplash.jpg";
import fourteen from "../../assets/redcharlie-jNtv6K1RFek-unsplash.jpg";
import fifteen from "../../assets/sid-balachandran-_9a-3NO5KJE-unsplash.jpg";
import sixteen from "../../assets/vincent-van-zalinge-vUNQaTtZeOo-unsplash.jpg";

const Images = () => {
  return (
    <div className={styles.images}>
      <div className={styles.container}>
        <span>
          <img className={styles.image} src={zero}></img>
        </span>{" "}
      </div>
      <div className={styles.container}>
        <span>
          <img className={styles.image} src={one}></img>
        </span>{" "}
      </div>
      <div className={styles.container}>
        <span>
          <img className={styles.image} src={two}></img>
        </span>{" "}
      </div>
      <div className={styles.container}>
        <span>
          <img className={styles.image} src={three}></img>
        </span>
      </div>
      <div className={styles.container}>
        <span>
          <img className={styles.image} src={four}></img>
        </span>{" "}
      </div>
      <div className={styles.container}>
        <span>
          <img className={styles.image} src={five}></img>
        </span>{" "}
      </div>
      <div className={styles.container}>
        <span>
          <img className={styles.image} src={six}></img>
        </span>{" "}
      </div>
      <div className={styles.container}>
        <span>
          <img className={styles.image} src={seven}></img>
        </span>
      </div>
      <div className={styles.container}>
        <span>
          <img className={styles.image} src={eight}></img>
        </span>
      </div>
      <div className={styles.container}>
        <span>
          <img className={styles.image} src={nine}></img>
        </span>{" "}
      </div>
      <div className={styles.container}>
        <span>
          <img className={styles.image} src={ten}></img>
        </span>{" "}
      </div>
      <div className={styles.container}>
        <span>
          <img className={styles.image} src={eleven}></img>
        </span>
      </div>
      <div className={styles.container}>
        <span>
          <img className={styles.image} src={twelve}></img>
        </span>
      </div>
      <div className={styles.container}>
        <span>
          <img className={styles.image} src={thirteen}></img>
        </span>
      </div>
      <div className={styles.container}>
        <span>
          <img className={styles.image} src={fourteen}></img>
        </span>
      </div>
      <div className={styles.container}>
        <span>
          <img className={styles.image} src={fifteen}></img>
        </span>
      </div>
      <div className={styles.container}>
        <span>
          <img className={styles.image} src={sixteen}></img>
        </span>
      </div>
    </div>
  );
};

export default Images;
