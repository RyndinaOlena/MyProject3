import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { PiCouchThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import css from './Navbar.module.css'

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
                <button className={css.btnOpenMenu} onClick={openModal}><p className={css.textMenu}>Menu</p></button>
            </div>
            {isModalOpen && (<div className={css.modalOverlay} >
                <div className={css.modal}>
                    <PiCouchThin className={css.logo} style={{ color: 'white' }} size={50} />
                    <button className={css.closeModal} onClick={closeModal}><RxCross1 size={20} style={{ color: 'white' }} /></button>
                    <div className={css.navMenuPosition}>
                        <nav className={css.navMenu} style={{ textDecoration: 'none' }}>
                            <Link className={css.menuLink} onClick={closeModal} to='/'>Home</Link>
                            <Link className={css.menuLink} onClick={closeModal} to='portfolio'>Portfolio</Link>
                            <Link className={css.menuLink} onClick={closeModal} to='pages'>Pages</Link>
                            <Link className={css.menuLink} onClick={closeModal} to='services'>Services</Link>
                            <Link className={css.menuLink} onClick={closeModal} to='contact'>Contact</Link>
                        </nav>
                    </div>
                </div>
            </div >)
            }
        </div>
    )
}

export default Navbar
