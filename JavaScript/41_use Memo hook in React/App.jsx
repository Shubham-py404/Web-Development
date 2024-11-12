import { useState ,useMemo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const nums= new Array(30_000_000).fill(0).map((_,i)=>{
  // underscore se item return nhi hoga and i index dega just like loop in js
  // fill se jo 30M declare kri hai wo unko 0 se fill krdega basically yeh array ko 0 se fill krdeta hai 
  return{
    index: i ,
    isMagical: i===29_000_000

  }
} )
function App() {
  const [count, setCount] = useState(0)
  const [numbers, setnumbers] = useState(nums)

  // const magical = numbers.find(item=>item.isMagical===true) //expens(ive computation website hee lag ho jaayegi
  const magical = useMemo(() => numbers.find(item=>item.isMagical===true),[numbers]) // ab lag nhi hoga 
  // since react mai re render hota hai toh normal method mai  but memoize mai re render nhi krega  value  bs ek baar update hoga toh ab 
  // isko responsive bnane ke liye ki jb number change ho toh hum number daaldenge dependency arraey ke andar woh true ke baad waala

  return (
    <>
      <div>
        <span>Magical number is {magical.index}</span>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          if (count==10){
            setnumbers(new Array(10_000_000).fill(0).map((_,i)=>{
              return{
                index: i ,
                isMagical: i===9_000_000
            
              }
            } ))
          }
        }}>
          {/* ek aur cheej krenge iske andar  */}
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

