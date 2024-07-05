type TaskbarButtonProps = {
    description: string,
    onClick: () => void,
    isSelected: boolean
}

type StartMenuProps = {
    isSelected: boolean,
    onClick: () => void
}

export type { StartMenuProps, TaskbarButtonProps }