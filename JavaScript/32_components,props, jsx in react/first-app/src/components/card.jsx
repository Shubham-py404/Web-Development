import React from 'react'
import "./card.css"

const card = (props) => {
  return (
    <div className='card'>
       
      <h1>{props.title}</h1>
      {/* since doono file connected hai toh humne wha props bnaaye mtlb wo 2 variable input lega aur yha sbko seperatly card mai insert krega  */}
      <p>{props.description}</p>
    </div>
  )
}

export default card
