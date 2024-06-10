import { WindowButton } from "..";
import { ButtonProps } from "../../../types/ButtonTypes";
import { Icon } from "./styles";


function MaximizeButton({ onClick }: ButtonProps) {

    return (
        <WindowButton icon={<Icon />} onClick={onClick}>
        </WindowButton>
    )

}

export { MaximizeButton };