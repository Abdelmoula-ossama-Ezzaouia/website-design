import React from "react";
import '../styles/header.css';
import logo from '../../src/images/dumble.png'

const nav_links = [
    {
        path: '#hero',
        display: 'Home'
    },
    {
        path: '#new',
        display: 'Featured'
    },
    {
        path: '#gallery',
        display: 'New'
    },
    {
        path: '#contact',
        display: 'Contact'
    },
]

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="nav__wrapper">
                    {/* logo */}
                    <div className="logo">
                        <div className="logo__img">
                            <img src={logo} alt="" />
                        </div>
                        <h2>Filbos</h2>
                    </div>

                    {/* navigation menu */}
                    <div className="navigation">
                        <ul className="menu">
                            {
                                nav_links.map(item => (
                                    <li className="nav__item">
                                        <a href={item.path}>
                                            {item.display}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* nav right  */}
                    <div className="nav-right">
                        <box-icon name='search'></box-icon>
                        <box-icon name='shopping-bag'></box-icon>
                        <span className="mobile__menu">
                            <box-icon name='menu'></box-icon>
                        </span>
                    </div>
                </div>
            </div>
        </header>
        
    )
}

export default Header