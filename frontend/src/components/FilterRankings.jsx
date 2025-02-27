import React, { useContext } from 'react'

// components
import Dropdown from './Dropdown'
import Pagination from './Pagination'
import FormSearch from './FormSearch'

// context
import { ThemeContext } from '../Contexts/ThemeContext'

const FilterRankings = (
  {
    playersCountries,
    pageCurr,
    setPageCurr,
    pagesCount,
    playerGender
  }
) => {

  const { theme } = useContext(ThemeContext)

  const sortingTypes = [
    'by firstName (ascending)',
    'by firstName (descending)',
    'by lastName (ascending)',
    'by lastName (descending)',
    'by ranking (ascending)',
    'by ranking (descending)'
  ]

  return (
    <header className={`filter--rankings ${theme === 'light' ? 'light' : 'dark'}`}>
      <div className='filter--rankings__wrapper'>
        <h4 className='sr-only'>Filter for rankings</h4>
        <div className='filter--rankings__item'>
          <Dropdown
            label='country'
            list={playersCountries}
            setPageCurr={setPageCurr}
            playerGender={playerGender}
          />
        </div>
        <div className='filter--rankings__item'>
          <Dropdown
            label='sort'
            list={sortingTypes}
            setPageCurr={setPageCurr}
            playerGender={playerGender}
          />
        </div>
        <div className='filter--rankings__item'>
          <Pagination
            pageCurr={pageCurr}
            setPageCurr={setPageCurr}
            pagesCount={pagesCount}
          />
        </div>
        <div className='filter--rankings__item'>
          <FormSearch />
        </div>
      </div>
    </header>
  );
};

export default FilterRankings;