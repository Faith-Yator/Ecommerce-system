import React from 'react'
import Computer from './Computer'
import Sidenav from './Sidenav'

function MainNav() {
  return (
    <div className='main'>
        <Sidenav/>
      <Computer/>
    </div>
  )
}

export default MainNav
