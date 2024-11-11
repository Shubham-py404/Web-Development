import React from 'react'
import { useParams } from 'react-router-dom'


const user = () => {
  const params = useParams()
  return (
    <div className='user'>
      i am user {params.username}
    </div>
  )
}

export default user
