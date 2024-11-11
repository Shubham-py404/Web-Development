import React from 'react'
import { NavLink } from 'react-router-dom'
// isse page reload nhi hota

const navbar = () => {
    
  return (
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/"><li>home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/about"><li>about</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/login"><li>Login</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/user"><li>User</li></NavLink>

      </nav>
    </div>
  )
}

export default navbar
