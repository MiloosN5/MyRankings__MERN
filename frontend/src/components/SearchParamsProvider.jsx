import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// contexts
import SearchParamsContext from '../Contexts/SearchParamsContext'

const SearchParamsProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams, setSearchParams] = useState(new URLSearchParams(location.search))

  const updateSearchParams = (key, value) => {
    if (value === null) {
      searchParams.delete(key)
    } else {
      searchParams.set(key, value)
    }
    setSearchParams(new URLSearchParams(searchParams))
    navigate({ search: searchParams.toString() })
  };

  useEffect(() => {
    const pathname = location.pathname
    const targetRoutes = ['/players/men', '/players/women']

    if (targetRoutes.includes(pathname) && !searchParams.has('page')) {
      searchParams.set('page', '1')
      setSearchParams(new URLSearchParams(searchParams))
      navigate({ search: searchParams.toString() }, { replace: true })
    }
  }, [location.pathname, searchParams, setSearchParams, navigate])

  return (
    <SearchParamsContext.Provider value={{ searchParams, updateSearchParams }}>
      {children}
    </SearchParamsContext.Provider>
  );
};

export default SearchParamsProvider

