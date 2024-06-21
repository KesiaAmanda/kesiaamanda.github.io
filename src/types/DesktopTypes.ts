import { PagesProps } from "./PagesTypes"

type ShortcutProps = {
    icon: string,
    description: string,
    onClick?: () => void,
    page?: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>],
}

type ThemeShortcutProps = {
    isDark: boolean,
    onClick: React.Dispatch<React.SetStateAction<boolean>>
}

export type { ShortcutProps, ThemeShortcutProps }