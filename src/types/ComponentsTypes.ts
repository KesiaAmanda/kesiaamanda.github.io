import { ReactNode } from "react"

type SkillsProps = {
    name: string,
    children: ReactNode
}

type MenuItemsProps = {
    file: boolean,
    edit: boolean,
    search: boolean,
    help: boolean,
}

export type { SkillsProps, MenuItemsProps }