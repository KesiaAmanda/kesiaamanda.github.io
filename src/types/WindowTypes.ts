import { ReactNode } from "react"
import { PagesProps } from "./PagesTypes"

type WindowProps = {
    header: ReactNode,
    children: ReactNode,
    width: string,
    page: PagesProps,
    focus: () => void
}

type Position = {
    x: number,
    y: number,
}

export type { WindowProps, Position }