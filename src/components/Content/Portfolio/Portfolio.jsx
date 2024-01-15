import React from 'react'
import css from './Portfolio.module.css'
const Portfolio = () => {
    return (
        <div className={css.overlayPortfolio}>
            <div className={css.portfolioBg}>
                <div className={css.titleContainer}></div>
                <div className={css.line}></div>
                <h1 className={css.titlePortfolio}>Про нас</h1>


            </div>
        </div>
    )
}

export default Portfolio
