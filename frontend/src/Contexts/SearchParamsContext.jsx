import { createContext, useContext } from 'react';

const SearchParamsContext = createContext();

export const useSearchParamsContext = () => useContext(SearchParamsContext);
export default SearchParamsContext;
