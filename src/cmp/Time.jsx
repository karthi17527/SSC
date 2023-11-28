"use client";
import { useEffect, useRef, useState } from "react";
import Ques from '../cmp/Ques'
export default function Time(props) {
  const [sec, setsec] = useState(0);
  const [day, setday] = useState(0);
  const [hour, sethour] = useState(0);
  const [min, setmin] = useState(0);
  const [state,setstate]=useState(0)
  const de = props.de
  let target = new Date();
  target.setSeconds( de.getSeconds()+60)
   useEffect(() => {
    const intervel = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setday(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      sethour(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setmin(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setsec(s);   
      if(sec<=0){
        target.setSeconds( de.getSeconds()+60)
      } 
    }, 1000);
    
    return () => clearInterval(intervel);
  }, [])



  return (
    <> <>
        <Ques s={sec} />
      </>
  
    </>
  );
}