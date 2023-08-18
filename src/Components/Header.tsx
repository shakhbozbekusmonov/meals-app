import { Link, NavLink } from "react-router-dom";
import "../Styles/header.scss";

const Header = () => {
    return (
        <header className='site-header'>
            <div className='container'>
                <div className='site-header__wrapper'>
                    <Link className='site-header__logo-link' to='/home'>
                        <img
                            className='site-header__logo-img'
                            src='./logo.png'
                            width='100'
                            height='50'
                            alt='Meals logo image'
                        />
                    </Link>

                    <nav className='site-header__nav'>
                        <ul className='site-header__nav-list'>
                            <li className='site-header__nav-item'>
                                <NavLink
                                    className='site-header__nav-link'
                                    to='/home'>
                                    Home 🍝
                                </NavLink>
                            </li>
                            <li className='site-header__nav-item'>
                                <NavLink
                                    className='site-header__nav-link'
                                    to='/meals/category'>
                                    Meals Category 🍕
                                </NavLink>
                            </li>
                            <li className='site-header__nav-item'>
                                <NavLink
                                    className='site-header__nav-link'
                                    to='/meals/area'>
                                    Meals Area 🍱
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
