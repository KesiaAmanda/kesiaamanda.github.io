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

let defaultClosePage = {
    isOpen: false,
    isInFocus: false,
    isMinimized: true,
    isMaximized: false,
    isClosed: true
} as PagesProps;

export function PagesContextProvider(props: PagesContextProviderType) {
    const [startMenu, setStartMenu] = useState(false);

    const welcome = useState<PagesProps>(focusPage)
    const aboutMe = useState<PagesProps>(defaultPage)
    const training = useState<PagesProps>(defaultPage)
    const credits = useState<PagesProps>(defaultPage)
    const musicPlayer = useState<PagesProps>(defaultPage)
    const skills = useState<PagesProps>(defaultPage)
    const paint = useState<PagesProps>(defaultClosePage)
    const minecraft = useState<PagesProps>(defaultClosePage)

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
        setState({ ...state, isMinimized: true, isInFocus: false, isClosed: true, isMaximized: false })
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
        training[1]({ ...training[0], ...props })
        credits[1]({ ...credits[0], ...props })
        musicPlayer[1]({ ...musicPlayer[0], ...props })
        skills[1]({ ...skills[0], ...props })
        paint[1]({ ...paint[0], ...props })
        minecraft[1]({ ...minecraft[0], ...props })
    };

    return (
        <PagesContext.Provider value={{
            startMenu, openMenu,
            welcome, aboutMe, training, credits, musicPlayer, skills, paint, minecraft,
            open, maximize, minimize, close, focus, removeFocus
        }}>
            {props.children}
        </PagesContext.Provider>
    )
}