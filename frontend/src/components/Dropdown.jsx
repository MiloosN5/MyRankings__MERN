import { useRef, useContext, useEffect } from 'react'

// icons
import { ArrowDown } from 'lucide-react'

// context
import { ThemeContext } from '../Contexts/ThemeContext'
import { useSearchParamsContext } from '../Contexts/SearchParamsContext';

const Dropdown = (
    {
        label,
        list,
        setPageCurr,
        playerGender
    }
) => {

    const { searchParams, updateSearchParams } = useSearchParamsContext();
    const { theme } = useContext(ThemeContext)
    const selectRef = useRef(null)
    const optionsRef = useRef(null)

    const dropdown_open = (e) => {
        const headerItem = e.target.closest('.dropdown')
        optionsRef.current.classList.toggle('show')
        headerItem.classList.toggle('open')
    }

    const dropdown_pick = (e) => {
        const headerItem = e.target.closest('.dropdown')
        selectRef.current.children[0].innerHTML = e.target.innerHTML
        updateSearchParams(`${label}`, e.target.innerHTML)
        optionsRef.current.classList.toggle('show')
        headerItem.classList.toggle('open')
        setPageCurr(1)
    }

    useEffect(() => {
        selectRef.current.children[0].innerHTML = label
    }, [playerGender])

    return (
        <article className={`dropdown ${theme === 'light' ? 'light' : 'dark'}`}>
            <div className='dropdown__wrapper'>
                <h4 className='sr-only'>Dropdown</h4>
                <header className='dropdown__select' ref={selectRef} >
                    <span>{label}</span>
                    <button onClick={(e) => dropdown_open(e)}>
                        <ArrowDown />
                    </button>
                </header>
                <ul
                    className='dropdown__options'
                    ref={optionsRef}
                    onClick={(e) => dropdown_pick(e)}
                >
                    {
                        list?.map((i, index) => (
                            <li key={index}>
                                <button>{i}</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </article>
    )
}

export default Dropdown