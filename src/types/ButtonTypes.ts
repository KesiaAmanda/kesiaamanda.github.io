import { PagesProps } from "./PagesTypes"

type ButtonProps = {
    onClick: () => void,
}

type DefaultButtonProps = {
    page: [PagesProps, React.Dispatch<React.SetStateAction<PagesProps>>],
    description: string,
    icon: any
}

export type { ButtonProps, DefaultButtonProps }