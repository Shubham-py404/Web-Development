import React from 'react'
import Component from './component'

const button = ({count}) => {
// const button = ({count}) => { before

  return (
    <div>
      button
      <Component/>
      {/* <button> <span><Component count = {count} /></span> I am a button</button> before */}
    </div>
  )
}

export default button
