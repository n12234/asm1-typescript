// import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
        <Header />
        <main className="grid grid-cols-3 gap-8 p-8">
        <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout