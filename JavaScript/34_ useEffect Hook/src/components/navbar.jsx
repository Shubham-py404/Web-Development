import React, {useEffect} from 'react'
const navbar = ({color}) => {


  // case1 : run on every render
  useEffect(() => {
    alert("Hey Welcome to My Page")
  } ) //jbhi yeh component load hoga means website tb yeh alert ko trigger krega 

  // case 2 : run only on first render
  useEffect(() => {
     alert("count for change  first render")
  }, [])
  

  // case 3 : run only when  certain value changed
  useEffect(() => {
    alert(" i am running becos color was change ")
  }, [color])


// example of cleanup function 
  useEffect(() => {
    alert("using unmount function ")
    return () => {
      alert("component is unmounted")
    }
  }, [])


  return (
    <>
      <div >
        I am Navbar {color} hehe....
      </div>
    </>
  )
}

export default navbar
