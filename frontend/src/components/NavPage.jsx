import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

// icons
import { Eye, Plus } from 'lucide-react'
import { GiTennisBall } from 'react-icons/gi'
import { FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa'
import { PiGenderFemaleBold, PiGenderMaleBold } from 'react-icons/pi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

// contexts
import { ThemeContext } from '../Contexts/ThemeContext'

const NavPage = ({ pageWrapperRef }) => {

    const { theme } = useContext(ThemeContext)

    const width_expand = () => {
        pageWrapperRef.current.classList.add('expand')
    }

    const width_shrink = () => {
        pageWrapperRef.current.classList.remove('expand')
    }

    return (
        <nav
            className={`nav ${theme === 'light' ? 'light' : 'dark'}`}
            onMouseEnter={() => width_expand()}
            onMouseLeave={() => width_shrink()}
        >
            <h4 className='sr-only'>Header page navigation</h4>
            <ul className='nav__list'>
                <li className={`nav__item--logo`}>
                    <NavLink className='nav__link--logo' to='/'>
                        <span className='nav__text--logo'>
                            <GiTennisBall className='icon' />
                            my rankings
                        </span>
                        <FontAwesomeIcon icon={faCaretRight} className='icon' />
                    </NavLink>
                </li>
                <li className='nav__item--route'>
                    <header className='nav__link--nolink'>
                        <Eye className='icon' />
                        <span className='nav__text--route'>GET PLAYERS</span>
                    </header>
                    <ul className='nav__list--sub'>
                        <li className='nav__item--subroute'>
                            <NavLink className='nav__link--subroute' to='players/men?page=1'>
                                <PiGenderMaleBold className='icon' />
                                <span className='nav__text--subroute'>MEN</span>
                            </NavLink>
                        </li>
                        <li className='nav__item--subroute'>
                            <NavLink className='nav__link--subroute' to='players/women?page=1'>
                                <PiGenderFemaleBold className='icon' />
                                <span className='nav__text--subroute'>WOMEN</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className='nav__item--route'>
                    <header className='nav__link--nolink'>
                        <Plus className='icon' />
                        <span className='nav__text--route'>ADD PLAYER</span>
                    </header>
                    <ul className='nav__list--sub'>
                        <li className='nav__item--subroute'>
                            <NavLink className='nav__link--subroute' to='players/men/new'>
                                <PiGenderMaleBold className='icon' />
                                <span className='nav__text--subroute'>MEN</span>
                            </NavLink>
                        </li>
                        <li className='nav__item--subroute'>
                            <NavLink className='nav__link--subroute' to='players/women/new'>
                                <PiGenderFemaleBold className='icon' />
                                <span className='nav__text--subroute'>WOMEN</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className='nav__item--social'>
                    <article className='nav__social'>
                        <h5 className='sr-only'>External social links</h5>
                        <a className='nav__link--social' href='https://facebook.com/'>
                            <FaFacebook className='icon' />
                            <span className='nav__text--social'>Facebook</span>
                        </a>
                        <a className='nav__link--social' href='https://instagram.com/'>
                            <FaInstagram className='icon' />
                            <span className='nav__text--social'>Instagram</span>
                        </a>
                        <a className='nav__link--social' href='https://discord.com/'>
                            <FaDiscord className='icon' />
                            <span className='nav__text--social'>Discord</span>
                        </a>
                    </article>
                </li>
            </ul>
        </nav>
    )
}

export default NavPage