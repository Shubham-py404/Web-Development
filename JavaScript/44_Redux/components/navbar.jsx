import React from 'react'
import { useSelector, useDispatch } from 'react-redux'



const navbar = () => {
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      the count is {count}
    </div>
  )
}

export default navbar
 