import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Loyaut = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Loyaut
