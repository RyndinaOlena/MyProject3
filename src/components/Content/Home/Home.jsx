import React from 'react'
import css from './Home.module.css'
import { Link } from 'react-router-dom'
import { IoImagesOutline } from "react-icons/io5";
import { MdPageview } from "react-icons/md";
import { FcServices } from "react-icons/fc";
import { MdOutlineContactPhone } from "react-icons/md";
const Home = () => {
    return (
        <>
            <div className={css.overlay}>
                <div className={css.hero}><h1 className={css.titleHome}>Ми втілюємо мрії кожного</h1><span className={css.linesHome}><span className={css.textHero}>Обирай найкращих</span></span><div className={css.navMenuDeasctop} >  </div>
                    <div className={css.linkHome}>
                        <nav className={css.navHome} style={{ textDecoration: 'none' }}>
                            <Link className={css.navLinkHome} to='portfolio'><span className={css.icon}><IoImagesOutline /></span>Про нас</Link>
                            <Link className={css.navLinkHome} to='pages'><span className={css.icon}><MdPageview /></span>Стилі</Link>
                            <Link className={css.navLinkHome} to='services'> <span className={css.icon}><FcServices /></span>Сервіс</Link>
                            <Link className={css.navLinkHome} to='contact'><span className={css.icon}><MdOutlineContactPhone /></span>Контакти</Link></nav>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Home
