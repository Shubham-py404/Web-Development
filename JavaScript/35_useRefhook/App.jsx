import { useState , useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let a = 0 ;
  //count per click krte hee let firse execute hota hai isliye iski wvalue dobara 0 ho jaati hai 
  

  // Case 1 
  // const a = useRef(0)
  // useEffect(() => {
  //   // a = a+ 1  ;
  //   a.current=a.current +1
  //   // abe yeh problem nhi Arrayegai 
  //   console.log(`re rendering and the value of a is ...${a}  `);
    
  // }) 


  // case 2 
  const btnref = useRef();
  useEffect(() => {
    console.log(` first rerendering`);
    btnref.current.style.backgroundColor ="red"
    // current ki wjha se value re render hone ke baad bhi usme rheti hai 
  }, [])
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a  href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
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
