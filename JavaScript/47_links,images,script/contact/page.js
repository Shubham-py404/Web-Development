import React from 'react'
import Script from 'next/script'
import Image from 'next/image'

const contact = () => {
  return (
    <div>


      <div className="img mt-5 relative ">
        <Image
        className='mx-auto object-contain'
        src="https://i.pinimg.com/736x/2d/37/6f/2d376ffdf9890fcd6b7e9602158e4a5d.jpg"
        // fill={true}
        alt="Picture of the author"
        width={950}
        height={500}
        
        />
      </div>


      <Script>
        {`    alert("welcome to contact page");   `}
      </Script>
      this is contact 
    </div>
  )
}

export default contact
