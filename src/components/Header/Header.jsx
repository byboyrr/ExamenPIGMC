import React from "react";
import styles from './header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.HeaderWrapper}>
            <Link className={styles.link} to={'/calculator-componente-electronice'}>
                Calculator componente electronice
            </Link>
            <Link className={styles.link} to={'/formular-de-calcul'}>
                Formular de calcul
            </Link>
            <Link className={styles.link} to={'/convertor-marimi-electrice'}>
                Convertor marimi electrice
            </Link>
            <Link className={styles.link} to={'/contact'}>
                Contact
            </Link>
            <Link className={styles.link} to={'/quizz'}>
                Quizz
            </Link>
        </div>
    )
}

export default Header;