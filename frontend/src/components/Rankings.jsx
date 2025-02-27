import React, { forwardRef } from 'react'

// components
import FilterRankings from './FilterRankings';
import TableRankings from './TableRankings';

const Rankings = forwardRef(
    ({
        playersCountries,
        pageCurr,
        setPageCurr,
        pagesCount,
        playersFiltered,
        playerGender,
        player_remove
    }, ref) => {

        return (
            <article className='rankings'>
                <div className='rankings__wrapper' ref={ref}>
                    <h3 className='sr-only'>Rankings</h3>
                    <FilterRankings
                        playersCountries={playersCountries}
                        pageCurr={pageCurr}
                        setPageCurr={setPageCurr}
                        pagesCount={pagesCount}
                        playerGender={playerGender}
                    />
                    <TableRankings
                        playersFiltered={playersFiltered}
                        playerGender={playerGender}
                        player_remove={player_remove}
                    />
                </div>
            </article>
        )
    }
);

export default Rankings;