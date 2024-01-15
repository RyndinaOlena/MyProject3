import css from './Contact.module.css'
const Contact = () => {

    return (
        <div className={css.bgContactOverlay}>
            <div className={css.bgContact}>
                <h1 className={css.contactTitle}>Contact</h1>
                <div className={css.containerContentcontact}>
                    <span className={css.linesHome}></span>
                    <p className={css.contactContent}>+380939331160</p>
                    <p className={css.contactContent}>+380668382582</p>
                    <p className={css.contactContent}>Дзвоніть у будь який час!
                    </p>
                    <p className={css.textContent}>Ми розуміємо на скільки цінний Ваш час, тому бережемо кожну хвилину.</p>

                </div>
            </div>
        </div>
    )
}

export default Contact
