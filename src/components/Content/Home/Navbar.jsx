import React, { useState } from 'react'
import { PiCouchThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import css from './Navbar.module.css'
import Modal from './Modal';
import { IoCallOutline } from 'react-icons/io5';

const Navbar = () => {

    const [isModalOpen, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }

    const phoneNumber = '+380939331160'
    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`
    }
    return (

        <div className={css.boxHeader}>
            <div className={css.cotainer}>
                <PiCouchThin className={css.logo} style={{ color: 'white' }} size={50} />
                <div className={css.navMenuDeasctop} >
                    <nav style={{ textDecoration: 'none' }}>
                        <Link className={css.navLinkDesctop} to='/'>Головна</Link>
                        <Link className={css.navLinkDesctop} to='portfolio'>Про нас</Link>
                        <Link className={css.navLinkDesctop} to='pages'>Стилі</Link>
                        <Link className={css.navLinkDesctop} to='services'>Матеріали</Link>
                        <Link className={css.navLinkDesctop} to='contact'>Контакти</Link></nav></div>
                <button className={css.buttonCall} onClick={handleCall}><IoCallOutline size={35} /></button>
                <button className={css.btnOpenMenu} onClick={openModal}><span className={css.textMenu}>Menu</span></button>
            </div>
            {isModalOpen && (<Modal closeModal={closeModal} />)}

        </div>


    )
}

export default Navbar
