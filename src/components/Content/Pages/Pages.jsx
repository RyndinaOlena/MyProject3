import React from 'react'
import { FaHandHoldingHeart } from "react-icons/fa";
import mehmod from '../../img/mehmod.jpg'
import roomtodo from '../../img/roomtodo.jpg'
import home from '../../img/home.jpg'
import css from '../Pages/Pages.module.css'

const Pages = () => {
    return (
        <div className={css.container}>
            <div className={css.heroPages}>
                <h1 className={css.titlePages}>Також ми хочемо показати всі новації сучасного світу, на що здатні сучасні технології</h1>
                <h2 className={css.titlePages}>Тут Ви можете обрати програму, за допомогою якої Ви зможете зробити свій дизайн без допомоги дизайнерів. <span className={css.spanPages}>Звичайно ми допоможемо в фінальних підрахунках <FaHandHoldingHeart />
                </span></h2>
            </div>
            <span className={css.line}></span>
            <div className={css.containerPages}>
                <div className={css.linkImgPage}>
                    <h3 className={css.titleLinkPage}>
                        <a href='https://blog.mehbud.com.ua/uk/other/10-prohram-dlya-dyzaynu-interyeru/' className={css.linkPagesText}>10 програм для дизайну інтер'єра</a>
                    </h3>
                    <a href='https://blog.mehbud.com.ua/uk/other/10-prohram-dlya-dyzaynu-interyeru/' className={css.linkTitlePages}>
                        <img src={mehmod} alt='mehmod' className={css.imgPages} />
                    </a>
                </div>

                <div >
                    <div className={css.linkImgPageRight}> <h3 className={css.titleLinkPage}><a className={css.linkPagesText} href='https://apps.apple.com/ru/app/planner-5d-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%96%D0%BD%D1%82%D0%B5%D1%80%D1%94%D1%80%D1%83/id606173978?l=uk'
                    >App Store</a></h3></div>
                    <div className={css.linkImgPageRight}>  <a href='https://apps.apple.com/ru/app/planner-5d-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%96%D0%BD%D1%82%D0%B5%D1%80%D1%94%D1%80%D1%83/id606173978?l=uk'
                        className={css.linkPages}>
                        <img src={roomtodo} alt='AppStore' className={css.imgPages} /></a></div>


                </div>
                <div className={css.linkImgPage}><h3 className={css.titleLinkPage}>
                    <a className={css.linkPagesText} href='https://play.google.com/store/apps/details?id=com.icandesignapp.all&hl=uk'
                    >Google Play</a></h3>
                    <a href='https://play.google.com/store/apps/details?id=com.icandesignapp.all&hl=uk'
                        className={css.linkPages}
                    ><img src={home} alt='google' className={css.imgPages} />
                    </a>
                </div>
            </div>
            <div>
                <h3 className={css.titleUlService}>Оберіть Ваш стиль:</h3>
                <ul>
                    <li className={css.itemService}>Сучасний<br />(modern):</li>
                    <li className={css.liService}> ~ Характеризується чистими лініями, мінімальним дизайном, використанням нових матеріалів та технологій.</li>
                    <li className={css.itemService}>Скандинавський<br />(scandinavian):</li>
                    <li className={css.liService}> ~ Визначається світлими тонами, простором, природними матеріалами та функціональністю.
                        Зазвичай має акценти дерева
                    </li>
                    <li className={css.itemService}>Класичний<br />(classic):</li>
                    <li className={css.liService}> ~ Цей стиль використовує елементи із старовинних єпох, важкі меблі, розкішні тканини, декоративні деталі та кришталеві прикраси.</li>
                    <li className={css.itemService}>Мінімалізм<br /> (minimalism):</li>
                    <li className={css.liService}> ~ Багато пустого простору, мало декору, прості форми та приглушені кольори. Спрощений стиль.</li>
                    <li className={css.itemService}>Арт-деко<br />(art deco):</li>
                    <li className={css.liService}> ~ Виділяється геометричними формами, розкішно, використанням дорогих матеріалів, об'ємними фасадами.</li>
                    <li className={css.itemService}>Богемський<br />(bohemian):</li>
                    <li className={css.liService}> ~ Вільний та електричний стиль, який використовує яскраві кольори, змішування стилів та багато текстилю.</li>
                    <li className={css.itemService}>Електрика<br />(electic):</li>
                    <li className={css.liService}> ~ З'єднує елементи різних стилів та періодів. Електричний дизайн дозволяє творити унікальні та особливі інтер'єри.</li>
                    <li className={css.itemService}>Кантрі<br />(country):</li>
                    <li className={css.liService}> ~ Наголошує на затишку та комфорті,  використання природних матеріалів та теплих кольорів</li>
                    <li className={css.itemService}>Індустріальний<br />(industrial):</li>
                    <li className={css.liService}> ~ Використання металевих елементів, стомленого дерева, відкритих конструкцій. зазвичай імітує промислові приміщення.</li>
                    <li className={css.liServiceLast}>Це найвідоміші приклади, і багато інших стилів може бути створено за допомогою змішування різних елементів та ідей.</li>
                </ul>
            </div>
        </div>

    )
}

export default Pages
