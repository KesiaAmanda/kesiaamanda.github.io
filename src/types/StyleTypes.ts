import { PagesProps } from "./PagesTypes";

interface ContentProps {
    $maxWidth: string,
    $maxHeight: string,
    $page: PagesProps
}

interface ContentSizeProps {
    $maxWidth: string,
    $maxHeight: string,
    $isDisabled: boolean
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

interface FoldersProps {
    $icon: string,
    $skillsFolder?: boolean
    $first?: boolean
}

interface TaskBarButtonProps {
    $isClosed?: boolean,
    $icon: any
}

interface PageElementsProps {
    $page: PagesProps
}

export type { ContentProps, ContentSizeProps, IsSelectedProps, IsShutdownProps, IsDisabledProps, ProgressBarProps, IconProps, TaskBarButtonProps, PageElementsProps, FoldersProps }