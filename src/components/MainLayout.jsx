import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function MainLayout () {
  return (
    <div className='App'>
      <Navbar/>
      <div className="content-box w-full flex">
        <Sidebar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout
