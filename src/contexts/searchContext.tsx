/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from "react";

interface Props {
    children: React.ReactNode;
}

export const SearchContext = createContext<any>(null);

const SearchProvider =({children}:Props)=>{
    const [search,setSearch]=useState<[]>([])
    return(
        <SearchContext.Provider value={{search,setSearch}}>
        {children}
        </SearchContext.Provider>
    )
}
export default SearchProvider;

export const useSearchContext=()=>{
    return useContext(SearchContext)
}




