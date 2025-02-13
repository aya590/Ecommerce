import React from 'react'
import Navbare from '../Navbare/Navbare'

import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Navbare/>
    <div className=" container mx-auto px-4 py-16">
    <Outlet></Outlet>
    </div>
  
  
    </>
  )
}
