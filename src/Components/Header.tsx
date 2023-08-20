import { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import menuIcon from "../Assets/img/menu-icon.svg";
import closeIcon from "../Assets/img/close-icon.svg";
import "../Styles/header.scss";
import Button from "./Button";
import Logo from "./Logo";

const Header = () => {
    const params = useParams();
    const [toggle, setToggle] = useState(false);

    return (
        <header className='site-header'>
            <div className='container'>
                <div className='site-header__wrapper'>
                    <Link className='site-header__logo-link' to='/home'>
                        <Logo />
                    </Link>

                    <nav className='site-header__nav'>
                        <ul className='site-header__nav-list'>
                            <li className='site-header__nav-item'>
                                <NavLink
                                    className='site-header__nav-link'
                                    to='/home'
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className='site-header__nav-item'>
                                <NavLink
                                    className='site-header__nav-link'
                                    to='/about'
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className='site-header__nav-item'>
                                <NavLink
                                    className='site-header__nav-link'
                                    to='/contacts'
                                >
                                    Contacts
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Button
                        className='site-header__toggle-btn border-0'
                        type='button'
                        text=''
                        onClick={() => setToggle(!toggle)}
                    >
                        <img
                            src={toggle ? closeIcon : menuIcon}
                            alt='Mobile menu icon'
                        />
                    </Button>
                </div>
            </div>

            <div className={`site-header__hidden ${toggle && "show"}`}>
                <ul className='nav flex-column'>
                    <li className='nav-item'>
                        <NavLink
                            to='/home'
                            className='nav-link'
                            onClick={() => setToggle(false)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink
                            to='about'
                            className='nav-link'
                            onClick={() => setToggle(false)}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink
                            to='/contacts'
                            className='nav-link'
                            onClick={() => setToggle(false)}
                        >
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div
                className={`site-header__overlay ${toggle && "show"}`}
                onClick={() => setToggle(false)}
            ></div>
        </header>
    );
};

export default Header;
