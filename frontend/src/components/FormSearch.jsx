import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

// components
import Input from './Input'

// contexts
import { useSearchParamsContext } from '../Contexts/SearchParamsContext';

const Search = () => {

    const { searchParams, updateSearchParams } = useSearchParamsContext();
    const [inputVal, setInputVal] = useState(searchParams.get('search') || '')

    const search_query = (e) => {
        const textInput = e.target.value;
        setInputVal(textInput)
        if (textInput.length === 0) {
            updateSearchParams('search', null)
        } else {
            updateSearchParams('search', textInput)
        }
    }

    useEffect(() => {
        setInputVal(searchParams.get('search') || '')
    }, [searchParams])

    return (
        <article className='form--search'>
            <div className='form--search__wrapper'>
                <h4 className='sr-only'>Search Form</h4>
                <form className='form--search__form'>
                    <fieldset className='form--search__field'>
                        <Input
                            label='search'
                            type='search'
                            name='search'
                            value={inputVal}
                            handleChange={search_query}
                        />
                    </fieldset>
                </form>
            </div>
        </article>
    )
}

export default Search