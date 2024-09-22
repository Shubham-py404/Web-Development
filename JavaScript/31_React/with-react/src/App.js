import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from './component/navbar'

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <Navbar logotext="shubham"/>
      {/* ye logo text navbar se connected hai  */}
      <div className="value">{value}</div>
      <button onClick={()=>{setValue(value+1)}}>click me</button>
    </div>
  );
}

export default App;
