import { ReactNode } from "react"

type WindowProps = {
    maximized: boolean,
    minimized: boolean,
    header: ReactNode,
    children: ReactNode
}

export type { WindowProps }