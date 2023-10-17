import React from 'react'

const ColorItems = ({color, setColor}) => {

  
  return (
    <div className='color-item' style={{'--bg-color':color}} onClick={setColor} ></div>
  )
}

export default ColorItems