type DesktopIconProps = {
    icon: string,
    description: string,
    onClick: () => void
}

type ThemeIconProps = {
    isDark: boolean,
    onClick: React.Dispatch<React.SetStateAction<boolean>>
}

export type { DesktopIconProps, ThemeIconProps }