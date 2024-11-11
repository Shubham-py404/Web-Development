
import { useContext } from 'react'
import { counterContext } from  '../context/context'  

const component = () => {
// const component = ({count}) => { before
   const counter = useContext(counterContext)
  return (
    <div>
      {/* {count}  before */}
      {/* component */}
      this is component
      {counter.count  }
    </div>
  )
}

export default component
