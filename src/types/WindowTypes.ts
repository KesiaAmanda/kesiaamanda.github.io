import { ReactNode } from "react"
import { PagesProps } from "./PagesTypes"

type WindowProps = {
    children: ReactNode,
    width: string,
    page: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>],
    description: string,
    icon: any
}

type Position = {
    x: number,
    y: number,
}

export type { WindowProps, Position }