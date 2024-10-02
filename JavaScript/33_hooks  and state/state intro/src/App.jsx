import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) //initial count 
  // reason of use state is that in js if we update a var it will be same but not 0 but usestate will back to its declared value after refresh or task 

  return (
    <>
      <div>the count is {count}</div>
      <button onClick={()=>{setCount(count+1)}}>update count</button>
      
    </>
  )
}

export default App
