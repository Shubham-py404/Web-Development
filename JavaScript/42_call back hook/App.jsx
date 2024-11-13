import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar'
import { useCallback } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [adjective, setadjective] = useState("good")

  // const changaadj= ()=>{
  //   return "another"
  // }
  //2   to solve render issue we will use call back function
  
  const changaadj= useCallback(
    ()=>{
     return "another" 
    },
    [count],
    // yeh re- render ke baad naya function bhi bnaayega 
    // yeh function ko freeze kr dega 
    // humne dependency array mai count likhdiya iska mtlb jb count change hoga tb isko permission hai function change krne ki 
  )


  return (
    <>

    <Navbar adjective= {"good"} getadjective= {changaadj}/>
    {/* 1 ab memo use krne ke baad bhi yeh re render hoga becos get asj
    ective function or any function in js changed like memory location or somtgh after re render so memo thinks the funtions produces unique value when app re re renders  */}

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
    </>
  )
}

export default App
