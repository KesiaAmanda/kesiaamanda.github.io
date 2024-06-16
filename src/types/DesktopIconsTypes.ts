import { PagesProps } from "./PagesTypes"

type IconProps = {
    icon: string,
    description: string,
    onClick: () => void
}

type DesktopIconProps = {
    icon: string,
    description: string,
    page: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>],
}

type ThemeIconProps = {
    isDark: boolean,
    onClick: React.Dispatch<React.SetStateAction<boolean>>
}

export type { IconProps, DesktopIconProps, ThemeIconProps }