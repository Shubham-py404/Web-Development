import { useState,useEffect } from 'react'
import { FaEdit } from "react-icons/fa";
import Navbar from './components/navbar'
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";


function App() {
  const [Todo, setTodo] = useState("")

  const [Todos, setTodos] = useState([])
  
  const [Edit, setEdit] = useState()
  
  const [showfinished, setshowfinished] = useState(true)


  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos= JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
   
  }, [])
  
  const saveTols = ()=>{
    localStorage.setItem("todos",JSON.stringify(Todos))
  }
  
  const handleEdit = (e,id)=>{
    let t =Todos.filter(i=>i.id === id )
    setTodo(t[0].Todo)
    let newTodo = Todos.filter(item=>{
      return item.id!==id;
    });
    setEdit(true)
    setTodos(newTodo)
    saveTols()

  }

  const handleDelete = (id,e)=>{
    let newTodo = Todos.filter(item=>{
      return item.id!==id;
    });
    setTodos(newTodo)
    saveTols()

  }

  const handleAdd = ()=>{
    setTodos([...Todos  ,{id: uuidv4() ,Todo , isCompleted:false}])
    setTodo("")
    saveTols()

    setEdit(false)

  }
 
  const handleChange= (e)=>{
    setTodo(e.target.value)
  }

  const handleCheckbox=(e) => {
    let id = e.target.name;
    let index = Todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...Todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveTols()

  }
  
  
  const togglefinished=() => {
    setshowfinished(!showfinished)
  }
  


  return (
    <>
      <Navbar/>
      <div  className="container w-[60vw] mx-auto mt-[67px] rounded-lg p-3  bg-[#282828] min-h-[70vh]    max-sm:w-full max-sm:h-[90vh] max-lg:w-[90vw]">
        <div className=' text-3xl font-bold text-center max-sm:text-xl py-3'>Task Mate - Stay on Track with Todos in One Place</div>
        <div className=' adding todo'>
          
          <div className='textbox flex justify-between m-1 items-center pt-4'>
            
            <input type="text"  onChange={handleChange} value={Todo} className='text-black h-9 rounded-md w-[74.5vw] max-sm:w-[78vw]  text-center' placeholder='Add Your Task'/>
            <button onClick={handleAdd} disabled={Todo.length<=3} className= {Edit?' bg-[#27a1c9] font-semibold h-9 w-[75px]  m-2 cursor-pointer hover:border hover:text-lg rounded-md items-center pl-5 text-lg' :' bg-[#27a1c9] font-semibold h-9 w-[75px] m-2 cursor-pointer hover:border hover:text-lg rounded-md  max-sm:w-[79px]' }  >{Edit?< FaSave /> :"Add" }   </button>
          </div>  
        </div>

        <div className=' font-bold text-lg  max-sm:text-[15px] m-4 py-2 flex items-center justify-end'><input onChange={togglefinished} type="checkbox" className='mr-4 w-[20px] h-[20px] ' checked={showfinished}/>Show finished Todos</div>
        <div className='opacity-15 h-[1px] bg-white w-10/12 max-sm:w-11/12 m-4 mx-auto font-bold'></div>

        <div className='text-2xl font-bold py-2 pl-5'>Your Todos </div>
        
        <div className="todoslist  overflow-y-scroll h-[46vh] max-sm:h-[49vh]  [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          {Todos.length ===0 && <div className='m-5 text-lg font-semibold'>No todos to display </div>}
          {Todos.map(item=>{
          return(
          (showfinished||!item.isCompleted) &&
          
          <div key={item.id} className=' min-h-14   max-w-[90vw] pl-2  flex shadow-md rounded-lg mt-4 '>
            <div className=" w-2  bg-[#27a1c9] rounded-[1px] left-0 top-0"></div>
            <div className="todos  flex justify-between pl-6 w-full  items-center" >
              <div className={item.isCompleted?"line-through max-sm:text-wrap p-2 ... ":" max-sm:text-wrap font-semibold p-2"} >{item.Todo}</div>
              <div className="buttons flex h-full items-center ">
                <div className="checkbox "><input name={item.id} onChange={handleCheckbox} type="checkbox" id='' checked={item.isCompleted} className='w-[15px] h-[15px] mr-4'/></div>
                <button onClick={(e)=>{handleEdit(e,item.id)}}  className=' bg-[#27a1c9] font-semibold h-9 w-9 m-3 pl-[7px]  cursor-pointer text-2xl hover:border hover:text-lg rounded-md'><FaEdit />
                </button>
                <button onClick={(e)=>{handleDelete(item.id,e)}} className=' bg-[#27a1c9] font-semibold h-9 w-8 m-3 pl-1 cursor-pointer hover:border hover:text-lg text-2xl rounded-md'><MdDelete />
                </button>
              </div>
            </div>
          </div>)})}

        </div>

        
           
      
      </div>
    </>
  )
}

export default App
