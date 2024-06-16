import { createContext, useState } from "react";
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
    const [startFocus, setStartButtonFocus] = useState(false);

    const welcome = useState<PagesProps>(focusPage)
    const aboutMe = useState<PagesProps>(defaultPage)

    const open = ([state, setState]: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>]) => {
        updateState({ isInFocus: false })
        setState({ ...state, isMinimized: false, isInFocus: true, isClosed: false })
    };

    const maximize = ([state, setState]: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>]) => {
        updateState({ isInFocus: false })
        setState({ ...state, isMaximized: !state.isMaximized, isInFocus: true })
    };

    const minimize = ([state, setState]: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>]) => {
        updateState({ isInFocus: false })
        setState({ ...state, isMinimized: true, isInFocus: false })
    };

    const close = ([state, setState]: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>]) => {
        updateState({ isInFocus: false })
        setState({ ...state, isMinimized: true, isInFocus: false, isClosed: true })
    };

    const focus = ([state, setState]: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>]) => {
        updateState({ isInFocus: false })
        setState({ ...state, isInFocus: true })
    };


    const updateState = (props: any) => {
        welcome[1]({ ...welcome[0], ...props })
        aboutMe[1]({ ...aboutMe[0], ...props })
    };

    return (
        <PagesContext.Provider value={{
            startFocus, setStartButtonFocus,
            welcome, aboutMe,
            open, maximize, minimize, close, focus
        }}>
            {props.children}
        </PagesContext.Provider>
    )
}