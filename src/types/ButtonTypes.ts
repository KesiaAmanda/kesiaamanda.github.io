import { ReactElement, ReactNode } from "react"
import { PagesProps } from "./PagesTypes"

type ButtonProps = {
    onClick: () => void,
}

type ActiveProps = {
    $active: boolean
}

type SmallButtonProps = {
    onClick: () => void,
    icon: ReactElement<any, any>
}

type MenuProps = {
    $active: boolean,
    $focus: boolean
}

type MediumButtomProps = {
    onClick: () => void,
    icon: ReactElement<any, any>,
    isDisabled?: boolean
}

type InvisibleButtonProps = {
    active: boolean
}

type DefaultButtonProps = {
    page: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>],
    description: string,
    icon: string
}

export type { ButtonProps, DefaultButtonProps, SmallButtonProps, MenuProps, MediumButtomProps, InvisibleButtonProps, ActiveProps }