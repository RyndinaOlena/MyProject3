import React from 'react'
import css from '../Services/Servises.module.css'

const Services = () => {
    return (
        <div сlassName={css.overlay}>
            <div className={css.hero}>
                <div className={css.titleServiceBg}>  <h1 className={css.titleService}>Тут ви можете знайти інформацію що до матеріалів, які використоє наша команда в роботі</h1></div>

                <ul className={css.ulService}>
                    <li className={css.itemService}>Дерево:</li>
                    <li className={css.liService}>Масив дерева (дуб, ясень, горіх і ін.).</li>
                    <li className={css.liService}>Деревні композити (ДСП, МДФ).</li>
                    <li className={css.itemService}>Тканина:</li>
                    <li className={css.liService}>Натуральні тканини (бавовна, лля, вовна).</li>
                    <li className={css.liService}>Синтетичні матеріали (подіестер, вельвет, мікрофібра).</li>
                    <li className={css.itemService}>Шкіра:</li>
                    <li className={css.liService}>Натуральна шкіра.</li>
                    <li className={css.liService}>Еко-шкіра.</li>
                    <li className={css.itemService}>Метал:</li>
                    <li className={css.liService}>Сталь, залізо, алюміній.</li>
                    <li className={css.liService}>Ковані елементи.</li>
                    <li className={css.itemService}>Текстиль:</li>
                    <li className={css.liService}>Зносостійкі матеріали для оббивкі м'якої меблі.</li>
                    <li className={css.itemService}>Ротанг і бамбук:</li>
                    <li className={css.liService}>Природні матеріали для виготовлення меблів у стилі ротанг.</li>
                    <p className={css.pService}>Ми часто комбінуємог різні матеріали для створення унікальних і стильних дизайнів. вибір матеріалів залежить від стилю меблів, бюджету, вподобань клієнтів і поточних дизайнерських тенденцій.</p>
                </ul>
            </div>
        </div>
    )
}

export default Services
