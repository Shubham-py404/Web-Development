import React from 'react'
import Footer from '../component/footer'
// using footer in nav  just merging two files

const navbar = ({logotext}) => {
  return (
    <div>
      <div className="logo">{logotext}</div>
        <ul>
            <li>home</li>
            <li>about </li>
            <li>support</li>
            <Footer/>
        </ul>
    </div>
  )
}

export default navbar
