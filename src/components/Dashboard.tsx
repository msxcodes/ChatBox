import React from 'react'
import SideBar from './SideBar'
import Chatbox from './Chatbox'

function Dashboard() {
  return (
    <div className='border w-3/4 ml-48 h-5/6 flex'>
      <SideBar/>
      <Chatbox/>
    </div>
  )
}

export default Dashboard
