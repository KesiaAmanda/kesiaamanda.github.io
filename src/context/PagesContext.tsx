import { createContext } from "vm";
import { useState } from "react";
import { PagesContextProviderType, PagesContextType } from "../types/PagesTypes";

export const PagesContext = createContext({} as PagesContextType)

export function PagesContextProvider(props: PagesContextProviderType) {
    const start = useState({
        open: false
    });

    return (
        <PagesContext.Provider value={{ start }}>
            {props.children}
        </PagesContext.Provider>
    )
}