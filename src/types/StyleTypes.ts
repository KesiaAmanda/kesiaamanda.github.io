import { PagesProps } from "./PagesTypes";

interface ContentProps {
    $maxWidth: string,
    $maxHeight: string,
    $page: PagesProps
}

interface IsSelectedProps {
    $isSelected: boolean
}

interface IsShutdownProps {
    $isShutdown?: boolean
}

interface IsDisabledProps {
    $isDisabled: boolean
}

interface ProgressBarProps {
    $marginLeft: string
}

interface IconProps {
    $icon: string
}

interface TaskBarButtonProps {
    $isClosed?: boolean,
    $icon: any
}

interface PageElementsProps {
    $page: PagesProps
}

export type { ContentProps, IsSelectedProps, IsShutdownProps, IsDisabledProps, ProgressBarProps, IconProps, TaskBarButtonProps, PageElementsProps }