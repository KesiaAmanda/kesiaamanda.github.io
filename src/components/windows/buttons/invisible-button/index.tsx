import { InvisibleButtonProps } from "../../../../types/ButtonTypes";
import { Container } from "./styles";

import minimizeIcon from '../../../../assets/icons/window/iconmonstr-arrow.svg'
import { Icon } from "../../window/styles";

function InvisibleButtom({ active }: InvisibleButtonProps) {

    return (
        <Container $active={active}>
            <Icon $icon={minimizeIcon} />
        </Container >
    )

}

export { InvisibleButtom };