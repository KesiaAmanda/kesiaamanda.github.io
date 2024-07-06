import { InvisibleButtonProps } from "../../../../types/ButtonTypes";
import { Container } from "./styles";
import { Icon } from "../../window/styles";
import { useTheme } from "styled-components";

function InvisibleButtom({ active }: InvisibleButtonProps) {
    const theme = useTheme();

    return (
        <Container $active={active}>
            <Icon $icon={theme.icons.window.arrow} />
        </Container >
    )

}

export { InvisibleButtom };