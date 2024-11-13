import React from 'react'
import { memo } from 'react'


const navbar = ({adjective , getadjective}) => {
  console.log("nav bar is rendered");
  // yeh jistni baar count bdega utni baar print hoga as we know ki har count pe pura file re render hota hai 
  
  return (
    <div>
       I am a {adjective} navbar
       <button onClick={()=>{getadjective()}}> change me </button>
    </div>
  )
}

export default  memo(navbar)