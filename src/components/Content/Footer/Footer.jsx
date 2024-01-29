import React from 'react'
import css from '../Footer/Footer.module.css'
import { PiCouchThin } from "react-icons/pi";

const Footer = () => {
    return (
        <div className={css.containerFooter}>
            <h4 className={css.titleFooter}>Зв'язатися з нами можна за номером:</h4>
            <p className={css.textFooter}>+380939331160</p>
            <p className={css.textFooter}>+380668382582</p>
            <PiCouchThin className={css.diamond} size={50} />
        </div>
    )
}

export default Footer
