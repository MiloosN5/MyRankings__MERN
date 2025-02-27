import React, { useContext, useEffect, useState } from 'react'

// icons
import { ChevronRight, ChevronLeft } from 'lucide-react'

// context
import { ThemeContext } from '../Contexts/ThemeContext'
import { useSearchParamsContext } from '../Contexts/SearchParamsContext';

const Pagination = (
    {
        pageCurr,
        setPageCurr,
        pagesCount
    }
) => {

    const { theme } = useContext(ThemeContext)
    const { searchParams, updateSearchParams } = useSearchParamsContext();
    const [pagesArr, setPagesArr] = useState([])

    const page_prev = () => {
        if (pageCurr === 1) {
            return;
        } else {
            setPageCurr(prev => prev - 1)
            updateSearchParams('page', pageCurr - 1)
        }
    }

    const page_pick = (e, id) => {
        setPageCurr(id)
        updateSearchParams('page', id)
    }

    const page_next = () => {
        if (pageCurr === pagesCount) {
            return;
        } else {
            setPageCurr(prev => prev + 1)
            updateSearchParams('page', pageCurr + 1)
        }
    }

    useEffect(() => {
        setPagesArr([...Array(pagesCount).keys()].map((page) => page + 1));
    }, [pagesCount, pageCurr])

    return (
        <nav className='pagination'>
            <h4 className='sr-only'>Pagination</h4>
            <ul>
                <li className='pagination__controls--left'>
                    <button onClick={page_prev}>
                        <ChevronLeft className='icon' />
                    </button>
                </li>
                {pagesArr.map((n, i) => (
                    <li key={i} className='pagination__pages'>
                        <button
                            className={`${pageCurr === n && theme === 'light'
                                ? 'dark'
                                : pageCurr === n && theme === 'dark'
                                    ? 'light'
                                    : ''
                                }`}
                            onClick={(e) => page_pick(e, n)}
                        >
                            {n}
                        </button>
                    </li>
                ))}
                <li className='pagination__controls--right'>
                    <button onClick={page_next}>
                        <ChevronRight className='icon' />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;