import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'

import { counterContext } from './context/context' 
// context.js mai ek const banana pdega phele fir import kenge

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar count={count}/>  before */}
    {/* humne ek prop set kra hai count naam ka jo nav bar access krega then button and then component */}
    
    <counterContext.Provider value = {{count, setCount}} >
      {/* since nav bar provider ke andar hai toh ab hum count navbar ke nested comp ke ke andar access ke skte hai , ab ek ek krne ki jarurat nhi hai  */}
{/* now useing use context  */}
        <Navbar/>  
        {/* ab hum bina component ko access kre usme appjsx se value bhej skte hai  */}
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </counterContext.Provider>
    </>
  )
}

export default App
