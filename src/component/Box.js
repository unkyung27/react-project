import React from 'react'

const Box = (props) => {
  let resultColor = props.result === "WIN" ? 'win' : props.result === "LOSE" ? 'lose' : props.result === "TIE" ? "tie" : '';
  
  console.log("resultColor   ", resultColor);
  return (
    <div className={`box ${resultColor}`}>
        <h1>{props.title}</h1>
        <img className="item-img" src={props.item && props.item.img}/> 
        <h2>{props.result}</h2>
    </div>
  )
}

export default Box