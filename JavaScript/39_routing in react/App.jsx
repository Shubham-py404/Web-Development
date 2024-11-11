import Navbar from './component/navbar'
import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './component/home'
import Login from './component/login'
import About from './component/about'
import User from './component/user'


// routing se hum hyper link create kr skte hai lekin iske andar 
// reloading nhi hogi just like yt and its a feature


function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar/><Home/></>
    },
    {
      path:'/login',
      element:<><Navbar/><Login/></>
    },
    {
      path:'/about' ,
      element:<><Navbar/><About/></>
    },
    {
      path:'/user/:username' ,
      // user name as a variable    
      //user mai useparams import krnge   and then username use krenge    
      element:<><Navbar/><User/></>
    }
  ])
  

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
