import React from 'react'
import css from './Portfolio.module.css'
import redKitch from '../../img/works/redKitchen.jpg'
import rivera from '../../img/works/rivera.jpg'
import blackKitch from '../../img/works/blackKitchen.jpg'
const Portfolio = () => {
    return (
        <div className={css.containerWidth}>
            <div className={css.overlayPortfolio}>
                <div className={css.portfolioBg}>
                    <div className={css.titleContainer}></div>
                    <span className={css.line}></span>
                    <h1 className={css.titlePortfolio}>Про нас</h1>
                </div>
            </div>
            <ul className={css.container}>
                <li className={css.redKitchContainer}>
                    <img src={redKitch} alt='red' className={css.redKitchimg}></img>
                </li>

                <li className={css.firstWork}>
                    <h2 className={css.titleKitch}>Наша історія:</h2>
                    <p className={css.textPortfolio}> Ми розпочали свій шлях у [рік заснування] з однією метою — запропонувати нашим клієнтам не лише меблі, а й неповторний досвід створення затишного та стильного будинку. Ми пишаємось своєю історією розвитку та прагнемо ділитися цією пристрастю з кожним, хто відвідує нас.
                    </p>
                </li>
            </ul>
            <ul className={css.reverce}>
                <li className={css.riveraKitch}>
                    <img src={rivera} alt='red' className={css.redKitchimg}></img>
                </li>

                <li className={css.firstWork}>
                    <h2 className={css.titleKitch}> Наша місія:</h2>
                    <p className={css.textPortfolio}>Наші меблеві колекції створюються з любов'ю та увагою до деталей. Ми пропонуємо унікальні дизайни, які поєднують у собі стиль, комфорт та функціональність. Незалежно від того, чи ви шукаєте щось для оновлення інтер'єру або ідеї для нового проекту, ми тут, щоб вас надихнути.
                    </p>
                </li>
            </ul>

            <ul className={css.container}>
                <li className={css.redKitchContainer}>
                    <img src={blackKitch} alt='red' className={css.redKitchimg}></img>
                </li>

                <li className={css.firstWork}>
                    <h2 className={css.titleKitch}> Наші Цінності:</h2>
                    <p className={css.textPortfolio}>  Ми дотримуємось цінностей, які роблять нас унікальними. Якість, творчість та турбота про клієнтів – ось те, що нас надихає щодня. Ми віримо, що ваш будинок - це не просто місце, а вираз вашої особистості, і ми прагнемо допомогти вам створити його таким, яким ви мрієте.
                    </p>
                </li>
            </ul>

        </div>

    )
}

export default Portfolio
