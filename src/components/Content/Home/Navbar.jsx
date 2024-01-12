import React, { useState } from 'react'
import { PiCouchThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import css from './Navbar.module.css'
import Modal from './Modal';

const Navbar = () => {
    const [isModalOpen, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    return (
        <div className={css.boxHeader}>
            <div className={css.navBar} >
                <PiCouchThin className={css.logo} style={{ color: 'white' }} size={50} />
                <div className={css.navMenuDeasctop} >
                    <nav style={{ textDecoration: 'none' }}>
                        <Link className={css.navLinkDesctop} to='/'>Home</Link>
                        <Link className={css.navLinkDesctop} to='portfolio'>Portfolio</Link>
                        <Link className={css.navLinkDesctop} to='pages'>Pages</Link>
                        <Link className={css.navLinkDesctop} to='services'>Services</Link>
                        <Link className={css.navLinkDesctop} to='contact'>Contact</Link></nav></div>

                <button className={css.btnOpenMenu} onClick={openModal}><span className={css.textMenu}>Menu</span></button>


            </div>

            {isModalOpen && (<Modal closeModal={closeModal} />)}

        </div>
    )
}

export default Navbar
