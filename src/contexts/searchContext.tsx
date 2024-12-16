/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from "react";

interface Props {
    children: React.ReactNode;
}

export const searchContext = createContext<any>(null);

const searchProvider =({children}:Props)=>{
    const [search,setSearch]=useState<[]>([])
    return(
        <searchContext.Provider value={{search,setSearch}}>
        {children}
        </searchContext.Provider>
    )
}
export default searchProvider;

export const useSearchContext=()=>{
    return useContext(searchContext)
}




