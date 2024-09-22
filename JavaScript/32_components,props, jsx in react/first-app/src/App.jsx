import Navbar from "./components/navbar"
import  Card from "./components/card"

function App() {

  return (
    // rule  we have to cover data in <> </> ti make something appear 
    <>
      we will use class name to prevent confusion 
      <Navbar/>
      <div className="cards">
        {/* ab yha jo bhi insert krenge wo props se sbke andar unique and seperatly insert karega  */}
        <Card title="Card 1 " description = " card 2 desc"/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      
    </>
  )
}

export default App
