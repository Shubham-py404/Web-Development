import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { title } from 'process'

function App() {
  const [count, setCount] = useState(0)
  
  const [showbtn, setshowbtn] = useState(false)

  const [todos, setTodos] = useState([
    {
      title:"hey 1",
      desc:"i am a good todo"
    },
    {
      title:"hey 2",
      desc:"i am a good todo"
    },
  ])

  // todo ko return krna pdega tbhi dikhega wo 
  const Todo = ({todo})=>{
  return(<>
  <div className="border-yellow-300 m-2" >
    <div className="todo">{todo.title} </div>
    <div className="todo">{todo.desc}</div>
  </div>
  </>)
  } 


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* {showbtn?<button>i will be shown only when another button is clicked</button>:"naaa"} */}
      {showbtn && <button>i waill be shown only when another button is clicked</button> } {/* better method  */}
      
      {/* For rendering list in react we use a special technique */}
       
      {/* humne todo element ko wha declare kra yha yeh print hua */}
      
      {todos.map(todo=>{
        // return <Todo key={Todo.title} todo={todo}/>
        return   (<div  key={Todo.title} className="border-yellow-300 m-2" >
        <div className="todo">{todo.title} </div>
        <div className="todo">{todo.desc}</div>
      </div>)

      })}
      {/* ab  saare lines render ho jaayenge */}

      
   
      <div className="card">
        <button onClick={() => setshowbtn((showbtn) => true)}>
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
