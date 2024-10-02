import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'



function App() {
  const [count, setCount] = useState(0)
  const [first, setfirst] = useState(0)
  

  
  return (
    <>
    {/* <Navbar color={"cyan" + "blue" + "color"}/> */}
      <div>
        <a href="https://vitejs.dev" target='_blank'>
           <img src={viteLogo} className='logo'  alt="" />
        </a>
        <a href="https://vitejs.dev" target='_blank'>
           <img src={reactLogo} className='logo react'  alt="" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
       <button onClick={()=> setCount((count)=> count + 1)}>count is {count}</button>
      </div>
      
      
    </>
  )
}

export default App
