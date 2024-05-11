import React, { useState } from "react";
import "../ComponentStyles/counter.css";

const Counter = () => {
    const [count,setCount]=useState(0)

    const increment=()=>{
        setCount((pre)=>pre+1)
    }
    const decrement=()=>{
        setCount((pre)=>pre-1)
    }
  return <div className="counter-data">
    <h1>Current Count</h1>
   <div className="counter-container">
   <div>
        <button onClick={decrement}>-</button>

    </div>
    <div className={count>0?"positive-val":"negitive-val"}>
        <h1>{count}</h1>
    </div>
    <div>
        <button onClick={increment}>
            +
        </button>
    </div>
   </div>
  </div>;
};

export default Counter;
