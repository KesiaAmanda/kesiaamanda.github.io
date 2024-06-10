import { Dispatch, ReactNode, SetStateAction } from "react";

type PagesContextType = {
    startFocus: boolean,
    setStartButtonFocus: Dispatch<SetStateAction<boolean>>,
    welcome: PagesProps,
    setWelcome: Dispatch<SetStateAction<PagesProps>>
}

type PagesContextProviderType = {
    children: ReactNode;
}

type PagesProps = {
    isOpen: boolean,
    isInFocus: boolean,
    isMinimized: boolean,
    isMaximized: boolean,
    isClosed: boolean
}

const defaultProps = {
    isOpen: false,
    isInFocus: false,
    isMinimized: false,
    isMaximized: false,
    isClosed: false
}

export type { PagesContextType, PagesContextProviderType, PagesProps, defaultProps }