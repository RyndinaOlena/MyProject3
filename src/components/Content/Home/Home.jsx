import React from 'react'
import css from './Home.module.css'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <div className={css.overlay}>
                <div className={css.hero}><h1 className={css.titleHome}>Ми втілюємо мрії кожного</h1><span className={css.linesHome}><span className={css.textHero}>Обирай найкращих</span></span>                <div className={css.navMenuDeasctop} >
                    <nav style={{ textDecoration: 'none' }}>
                        <Link className={css.navLinkDesctop} to='/'>Home</Link>
                        <Link className={css.navLinkDesctop} to='portfolio'>Portfolio</Link>
                        <Link className={css.navLinkDesctop} to='pages'>Pages</Link>
                        <Link className={css.navLinkDesctop} to='services'>Services</Link>
                        <Link className={css.navLinkDesctop} to='contact'>Contact</Link></nav></div>
                </div>

            </div>
        </>
    )
}

export default Home
