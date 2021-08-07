import menuItems from './Header.data'
// import Link from 'next/link'
// import Image from 'next/image'
import { FaFireAlt } from "react-icons/fa";

import { useEffect, useState } from 'react';

import { Link as ScrollLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Header1 = () => {
    var [headerClassName, setHeaderClassName] = useState('');
    var [navMobileHeight, setNavMobileHeight] = useState('');
    var [mobileMenu, setMobileMenu] = useState(false);

    var height;

    useEffect(() => {

        height = document.getElementById('header-height').clientHeight;
        setNavMobileHeight('calc(100vh - ' + height + 'px)');

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })


    const handleScroll = () => {
        if (window.scrollY > 150) {
            setHeaderClassName('scrolled')
            height = document.getElementById('header-height').clientHeight;
            setNavMobileHeight('calc(100vh - ' + height + 'px)');
        } else {
            setHeaderClassName('')
            height = document.getElementById('header-height').clientHeight;
            setNavMobileHeight('calc(100vh - ' + height + 'px)');
        }
    }

    const toggleMobileMenu = () => {
        console.log(mobileMenu);
        !mobileMenu ? setMobileMenu(true) : setMobileMenu(false);
    }

    const ListMenu = ({ path, label }) => {
        return (
            <li className="nav-item">
                <ScrollLink
                    // href={menuItem.path}
                    activeClass="active"
                    to={path} spy={true}
                    smooth={true} offset={0} duration={700}
                    delay={100}
                    className="nav-link"
                >
                    {label}
                </ScrollLink>
            </li>
        )
    }

    return (
        <header className={`header-1 navigation-wrap fixed w-full z-10 top-0 ${headerClassName}`}>
            <div className={`padding-on-scroll ${mobileMenu ? 'active' : ''}`} id="header-height">
                <div className="section-wrapper">
                    <div className="container-fluid">
                        <nav className="navbar navbar-light">

                            <a href="/" className="navbar-brand animsition-link" >
                                <img src="/img/logo.png" alt="logo" width='50px' height='50px' />
                                <span>Erkade</span>
                            </a>

                            <div className="flex flex-grow">
                                <ul className="flex ml-auto navbar-nav">
                                    {menuItems.map((menuItem, i) => (
                                        <ListMenu
                                            key={i}
                                            path={menuItem.pathID}
                                            label={menuItem.label}
                                        />
                                    ))}
                                </ul>
                                <div className="ml-auto nav-toggle">
                                    <button className="shadow" onClick={toggleMobileMenu}>
                                        <FaFireAlt />
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div
                className={`nav-mobile ${mobileMenu ? 'active' : ''}`}
                id="nav-mobile"
                style={{ height: navMobileHeight }}
            >
                <ul className="navbar-nav">
                    {menuItems.map((menuItem, i) => (
                        <ListMenu
                            key={i}
                            path={menuItem.pathID}
                            label={menuItem.label}
                        />
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Header1
