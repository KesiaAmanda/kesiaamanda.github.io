import { Dispatch, createContext, useState } from "react";
import { PagesContextProviderType, PagesContextType, PagesProps } from "../types/PagesTypes";

export const PagesContext = createContext({} as PagesContextType)

let focusPage = {
    isOpen: true,
    isInFocus: true,
    isMinimized: false,
    isMaximized: false,
    isClosed: false
} as PagesProps;

let defaultPage = {
    isOpen: false,
    isInFocus: false,
    isMinimized: true,
    isMaximized: false,
    isClosed: false
} as PagesProps;

export function PagesContextProvider(props: PagesContextProviderType) {
    const [startMenu, setStartMenu] = useState(false);

    const welcome = useState<PagesProps>(focusPage)
    const aboutMe = useState<PagesProps>(defaultPage)

    const open = ([state, setState]: [PagesProps, Dispatch<React.SetStateAction<PagesProps>>]) => {
        updateState({ isInFocus: false })
        setState({ ...state, isMinimized: false, isInFocus: true, isClosed: false })
    };

    const maximize = ([state, setState]: [PagesProps, Dispatch<React.SetStateAction<PagesProps>>]) => {
        updateState({ isInFocus: false })
        setState({ ...state, isMaximized: !state.isMaximized, isInFocus: true })
    };

    const minimize = ([state, setState]: [PagesProps, Dispatch<React.SetStateAction<PagesProps>>]) => {
        updateState({ isInFocus: false })
        setState({ ...state, isMinimized: true, isInFocus: false })
    };

    const close = ([state, setState]: [PagesProps, Dispatch<React.SetStateAction<PagesProps>>]) => {
        updateState({ isInFocus: false })
        setState({ ...state, isMinimized: true, isInFocus: false, isClosed: true })
    };

    const focus = ([state, setState]: [PagesProps, Dispatch<React.SetStateAction<PagesProps>>]) => {
        if (!state.isInFocus) {
            updateState({ isInFocus: false })
            setState({ ...state, isInFocus: true })
        }
    };

    const removeFocus = () => {
        updateState({ isInFocus: false })
    };

    const openMenu = () => {
        removeFocus()
        setStartMenu(true)
    };


    const updateState = (props: any) => {
        setStartMenu(false)
        welcome[1]({ ...welcome[0], ...props })
        aboutMe[1]({ ...aboutMe[0], ...props })
    };

    return (
        <PagesContext.Provider value={{
            startMenu, openMenu,
            welcome, aboutMe,
            open, maximize, minimize, close, focus, removeFocus
        }}>
            {props.children}
        </PagesContext.Provider>
    )
}