import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import data from '../app/data'
import One from './One'


export default function Ques(props) {
  const count=useRef(-2)
  let a=count.current
  if (props.s<=0){
    count.current=count.current+1
    a=count.current
  }
  return (
    <div>
    <One time={props.s}  index={a} />
    </div>
  )
}