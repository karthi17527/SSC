"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import extques from "../cmp/Ques";
import Time from "../cmp/Time";
import Styles from "./page.module.css";
export default function Home() {
  const [start, setsrt] = useState(false);
  const Change = (e) => {
    console.log("chagbe");
    setsrt(e);
  };
  const Abc = () => {
    console.log("page");
    extques(true);
    console.log("exit pagge");
  };
  const [btn, setbtn] = useState("next");
  const Validate = () => {};
  return (
    <div className={styles.container}>
      {start ? (
        <Time Change={Change} de={new Date()} />
      ) : (
        <button
          className={styles.start}
          onClick={() => {
            setsrt(true);
          }}
        >
          start
        </button>
      )}
    </div>
  );
}
