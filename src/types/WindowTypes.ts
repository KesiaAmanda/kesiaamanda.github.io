import { ReactNode } from "react"

type WindowProps = {
    maximized: boolean,
    minimized: boolean,
    header: ReactNode,
    children: ReactNode,
    width: string
}

type Position = {
    x: number,
    y: number,
}

export type { WindowProps, Position }