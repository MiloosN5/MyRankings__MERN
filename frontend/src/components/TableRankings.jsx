import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';

// contexts
import { ThemeContext } from '../Contexts/ThemeContext';

// components
import Flag from './images/Flag';

//icons
import { Pencil, XSquare, PlusCircle } from 'lucide-react'

const TableRankings = ({
    playersFiltered,
    playerGender,
    player_remove
}) => {

    const { theme } = useContext(ThemeContext)
    const [isMobile, setIsMobile] = useState(false)
    const editColRef = useRef(null)
    const removeColRef = useRef(null)
    const nameColRef = useRef(null)

    const text_change = () => {
        const getRootFontSize = () => parseFloat(getComputedStyle(document.documentElement).fontSize);
        console.log('root', getRootFontSize())
        const desktopBreakpoint = 48 * getRootFontSize();

        if (window.innerWidth < desktopBreakpoint) {
            if (nameColRef.current) {
                nameColRef.current.innerHTML = 'Player';
            }
            setIsMobile(true)
        } else {
            if (nameColRef.current) {
                nameColRef.current.innerHTML = 'LastName';
            }
            setIsMobile(false)
        }
    }

    useEffect(() => {
        text_change();
        window.addEventListener('resize', text_change)
        return () => {
            window.removeEventListener('resize', text_change)
        }
    }, [])

    return (
        <article className={`table--rankings ${theme === 'light' ? 'light' : 'dark'}`} role='table'>
            <div className='table--rankings__wrapper'>
                <h4 className='sr-only'>Table for rankings</h4>
                <div role='rowgroup' className='table--rankings__header'>
                    <div className='table--rankings__row--header' role='row'>
                        <span className='table--rankings__more--header table-cellTitle' >More</span>
                        <span className='table--rankings__flag--header table-cellTitle' >Flag</span>
                        <span className='table--rankings__firstName--header table-cellTitle' >FirstName</span>
                        <span
                            className='table--rankings__lastName--header table-cellTitle'
                            ref={nameColRef}
                        >
                            LastName
                        </span>
                        <span className='table--rankings__ranking--header table-cellTitle' >#</span>
                        <span className='table--rankings__age--header table-cellTitle' >Age</span>
                        <span
                            className='table--rankings__edit--header table-cellTitle'
                            ref={editColRef}
                        >
                            {isMobile ? <Pencil className='icon' /> : 'Edit'}
                        </span>
                        <span
                            className='table--rankings__delete--header table-cellTitle'
                            ref={removeColRef}
                        >
                            {isMobile ? <XSquare className='icon' /> : 'Remove'}
                        </span>
                    </div>
                </div>
                <div role='rowgroup' className='table--rankings__content'>
                    {playersFiltered?.map((player, index) => {
                        return (
                            <article
                                className='table--rankings__row--player'
                                key={index}
                                role='row'
                            >
                                <div className='table--rankings__more--player table-cellContent'>
                                    <NavLink to={`/players/${playerGender}/${player._id}/${player.slug}`}>
                                        <PlusCircle className='icon' />
                                    </NavLink>
                                </div>
                                <div className='table--rankings__flag--player table-cellContent'>
                                    <Flag country={`${player.country[0]}`} />
                                </div>
                                <div className='table--rankings__firstName--player table-cellContent'>
                                    <span>{player.firstName}</span>
                                </div>
                                <div className='table--rankings__lastName--player table-cellContent'>
                                    <span>{player.lastName}</span>
                                </div>
                                <div className={`table--rankings__ranking--player table-cellContent ${theme === 'light' ? 'dark' : 'light'}`}>
                                    <span>{player.ranking}</span>
                                </div>
                                <div className='table--rankings__age--player table-cellContent'>
                                    <span>{player.age}</span>
                                </div>
                                <div className='table--rankings__edit--player table-cellContent'>
                                    <NavLink to={`/players/${playerGender}/${player._id}/${player.slug}/edit`}>
                                        <Pencil className='icon' />
                                    </NavLink>
                                </div>
                                <div className='table--rankings__delete--player table-cellContent'>
                                    <button onClick={(e) => player_remove(e, player._id)}>
                                        <XSquare className='icon' />
                                    </button>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </article>
    );
};

export default TableRankings;