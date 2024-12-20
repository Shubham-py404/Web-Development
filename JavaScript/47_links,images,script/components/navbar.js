import React from 'react'
import Link from 'next/link'
// link se page reload nhi hote ise hum attribute a tag ki jgha likh denge 


const navbar = () => {
  return (
    <div >
      <div className="navbar text-white flex justify-center">
        <ul className='flex gap-10 *:font-bold *:text-xl  *:border-transparent *:m-10'>
            <Link href="/"><li className='hover:text-black  hover:bg-slate-100  rounded-full h-12 content-center text-center  w-32  ' >Home</li></Link>
            <Link href="/about"><li className='hover:text-black hover:bg-slate-100 rounded-full h-12 content-center text-center w-32 '>About</li></Link>
            <Link href="/contact"><li className='hover:text-black hover:bg-slate-100 rounded-full h-12 content-center w-32 text-center'>Contact</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default navbar
