import { createContext, useState } from "react";
import { PagesContextProviderType, PagesContextType, PagesProps } from "../types/PagesTypes";

export const PagesContext = createContext({} as PagesContextType)

export function PagesContextProvider(props: PagesContextProviderType) {
    const [startFocus, setStartButtonFocus] = useState(false);
    const [welcome, setWelcome] = useState<PagesProps>({
        isOpen: true,
        isInFocus: true,
        isMinimized: false,
        isMaximized: false,
        isClosed: false
    })
    // const welcome = useState<PagesProps>(defaultProps)

    return (
        <PagesContext.Provider value={{
            startFocus, setStartButtonFocus,
            welcome, setWelcome
        }}>
            {props.children}
        </PagesContext.Provider>
    )
}