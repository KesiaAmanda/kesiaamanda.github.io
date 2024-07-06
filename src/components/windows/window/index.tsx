import { useDraggable } from "../../../hooks/useDraggable";
import { usePages } from "../../../hooks/usePages";
import { WindowProps } from "../../../types/WindowTypes";
import { SmallButtom } from "../buttons/small-button";
import { Buttons, Container, Content, Header, Icon, Text } from "./styles";
import { useTheme } from "styled-components";


function Window({ children, page, description, icon, notMaximizeable }: WindowProps) {
    const theme = useTheme();

    const { position, onMouseDown } = useDraggable(page[0].isMaximized, () => focus(page));
    const { maximize, minimize, close, focus } = usePages();

    return (
        <Content $page={page[0]} onClick={() => focus(page)}
            $maxWidth={(window.innerWidth - 0) + "px"}
            $maxHeight={(window.innerHeight - 32) + "px"}
            style={(position && !page[0].isMaximized) ? {
                'position': 'fixed',
                'top': `${position.y}px`,
                'left': `${position.x}px`,
                'transform': 'none',
            } : {}}>
            <Container $page={page[0]}>
                <Header
                    onMouseDown={onMouseDown}>
                    <Text $icon={icon}>{description}</Text>
                    <Buttons>
                        <SmallButtom icon={<Icon $icon={theme.icons.window.minimize} />} onClick={() => minimize(page)} />
                        {!!!notMaximizeable && <SmallButtom icon={<Icon $icon={theme.icons.window.maximize} />} onClick={() => maximize(page)} />}
                        <SmallButtom icon={<Icon $icon={theme.icons.window.close} />} onClick={() => close(page)} />
                    </Buttons>
                </Header>
                {children}
            </Container>
        </Content>
    )

}

export { Window };