import React from 'react'
import './Unauthorized.css'
const Unauthorized = () => {
  return (
    <div className='err-container'>
        <div className='err-content'>
          <p>401 <span>Unauthorized</span></p>
        </div>
    </div>
  )
}

export default Unauthorized