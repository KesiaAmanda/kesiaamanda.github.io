import { Dispatch, ReactNode, SetStateAction } from "react";

type PagesContextType = {
    startFocus: boolean,
    setStartButtonFocus: Dispatch<SetStateAction<boolean>>,
    welcome: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>],
    aboutMe: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>],
    open: ([state, setState]: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>]) => void,
    maximize: ([state, setState]: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>]) => void,
    minimize: ([state, setState]: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>]) => void,
    close: ([state, setState]: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>]) => void,
    focus: ([state, setState]: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>]) => void,
    removeFocus: ([state, setState]: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>]) => void,
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