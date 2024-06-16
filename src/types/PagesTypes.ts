import { Dispatch, ReactNode } from "react";

type PagesContextType = {
    startMenu: boolean,
    openMenu: () => void
    welcome: [PagesProps, Dispatch<React.SetStateAction<PagesProps>>],
    aboutMe: [PagesProps, Dispatch<React.SetStateAction<PagesProps>>],
    training: [PagesProps, Dispatch<React.SetStateAction<PagesProps>>],
    open: ([state, setState]: [PagesProps, Dispatch<React.SetStateAction<PagesProps>>]) => void,
    maximize: ([state, setState]: [PagesProps, Dispatch<React.SetStateAction<PagesProps>>]) => void,
    minimize: ([state, setState]: [PagesProps, Dispatch<React.SetStateAction<PagesProps>>]) => void,
    close: ([state, setState]: [PagesProps, Dispatch<React.SetStateAction<PagesProps>>]) => void,
    focus: ([state, setState]: [PagesProps, Dispatch<React.SetStateAction<PagesProps>>]) => void,
    removeFocus: () => void,
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