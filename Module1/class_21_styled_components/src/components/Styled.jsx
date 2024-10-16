import React from "react";
import style from "./Styled.module.css";
import styles from "styled-components";
function Styled() {
  const Heading = styles.h2({
    color: "green",
    fontSize: "50px",
  });
  return (
    <>
      <h1 className={style.heading}>Hameed</h1>
      <Heading>Styled Heading</Heading>
    </>
  );
}

export default Styled;
