import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Loyaut = () => {
    return (
        <>
            <Navbar />

            <Outlet />
            <Footer />
        </>
    )
}

export default Loyaut
