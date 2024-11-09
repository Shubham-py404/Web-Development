import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name , setname] = useState("shubham")
  const [form , setform] = useState({email:"", phone:""})

  const handlevent =()=>{
    alert(" i am clicked ")
  }

  const handlevent2 =()=>{
    alert(" i am clicked too ")

  }
  const handlevent3 =(e)=>{
    setname(e.target.value)

  }
  const handlechange =(e)=>{
    setform({...form,[e.target.name]:e.target.value})
    // yeh syntax hai isse humne handle change ko target krke iski value ko target kra hai
    console.log(form);
    
  }

  return (
    <>
      <div className="button">
        <button onClick={handlevent}>click me</button>
        {/* on click is a function in react it started with on  we can trigger any function with the help of (on syntax )*/}
      </div>


      <div className="red h-40 w-100 border bg-gray-500" onMouseOver={handlevent2}>hell nooo</div>
      <input type="text" value={name} onChange={handlevent3}/>
      {/* on change se value change hogi jo function btaayega  */}

      <div>
      <input type="text" name='email' value={form.email?form.email:""} onChange={handlechange}/>
                                             {/* ternary operator */}
      <input type="text" name='phone' value={form.phon0e?form.phone:""} onChange={handlechange}/>
      </div>
    </>

  )
}

export default App
