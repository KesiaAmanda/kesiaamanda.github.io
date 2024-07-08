import { ReactNode } from "react"
import { PagesProps } from "./PagesTypes"

type WindowProps = {
    children: ReactNode,
    page: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>],
    description: string,
    icon: any,
    notMaximizeable?: boolean,
}

type Position = {
    x: number,
    y: number,
}

type WindowMenuProps = {
    notSearchable?: boolean,
    page: PagesProps,
}

type WindowAddressProps = {
    path: string,
}

export type { WindowProps, Position, WindowMenuProps, WindowAddressProps }