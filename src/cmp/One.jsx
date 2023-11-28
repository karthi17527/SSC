'use client'
import React, { useEffect, useRef, useState } from 'react'
import answer from '../app/answer'
import data from '../app/data'
import Image from 'next/image'
import styles from './One.module.css'
let a=data.length
let m=[]
export default function One(props) {
  const [op,setop]=useState('i dont know')
    const proc=useRef(true)
    if (props.index<=a){
        proc.current=true
    }
    else{
        proc.current=false
    }
    let an=(props.index/2)+1
    if(props.time==0){
    }
    const Validate=()=>{
      if (op==answer[props.index]){
          alert('This answer is correct')
      }
    }
    const Result =()=>{
      return(
        <>
        <h1>result</h1>
       { console.log(answer)}
        
        </>
      )
    }
    if (proc.current==true){
      return (
    
        <div className={styles.content}>
       <div className={styles.head}><h1 className={styles.time}>{props.time}</h1>
        <h1 className={styles.qno}>Question {(props.index/2)+1} of {(a+1)/2}</h1>  </div> 
        <div className={styles.img}><Image src={`/ssc_questions/${data[props.index]}`} width={250} height={250} alt='hello'/></div>
        
        <div>
      <div><button onClick={()=>{setop('a')} } className={styles.start}>A</button></div>
        <div><button onClick={()=>{setop('b')}} className={styles.start}>B</button></div>
        <div><button onClick={()=>{setop('c')}} className={styles.start}>C</button></div>
        <div><button onClick={()=>{setop('d')}} className={styles.start}>D</button></div>
        <div><button onClick={()=>{Validate()}} className={styles.start}>Check</button></div>
    
        </div>
        </div>)

    }
    else{
      return (
        <h1>Done</h1>
      )
    }
}
