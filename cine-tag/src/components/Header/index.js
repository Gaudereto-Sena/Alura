import React from 'react'
import logo from './logo.png';
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import HeaderLink from 'components/HeaderLink';

const Header = () => {
    return (
        <header className={styles.cabecalho}>
            <Link to='/'>
                <img src={logo} alt='Logo do Cinetag' />
            </Link>
            <nav>
                <HeaderLink url='/'>
                    Home
                </HeaderLink>
                <HeaderLink url='/favoritos'>
                    Favoritos
                </HeaderLink>
            </nav>
        </header>
    )
}

export default Header