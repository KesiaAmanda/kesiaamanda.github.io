import { useDraggable } from "../../../hooks/useDraggable";
import { usePages } from "../../../hooks/usePages";
import { WindowProps } from "../../../types/WindowTypes";
import { CloseButton } from "../buttons/close-button";
import { MaximizeButton } from "../buttons/maximize-button";
import { MiminizeButton } from "../buttons/minimize-button";
import { Buttons, Container, Content, Header, Text } from "./styles";


function Window({ children, width, page, description, icon }: WindowProps) {

    const { position, onMouseDown } = useDraggable(page[0].isMaximized, () => focus(page));

    const { maximize, minimize, close, focus } = usePages();

    return (
        <Content width={width} page={page[0]} onClick={() => focus(page)}
            maxWidth={(window.innerWidth - 4) + "px"}
            maxHeight={(window.innerHeight - 32) + "px"}
            style={(position && !page[0].isMaximized) ? {
                'position': 'fixed',
                'top': `${position.y}px`,
                'left': `${position.x}px`,
                'transform': 'none',
            } : {}}>
            <Container page={page[0]}>
                <Header
                    onMouseDown={onMouseDown}>
                    <Text icon={icon}>{description}</Text>
                    <Buttons>
                        <MiminizeButton onClick={() => minimize(page)} />
                        <MaximizeButton onClick={() => maximize(page)} />
                        <CloseButton onClick={() => close(page)} />
                    </Buttons>
                </Header>
                {children}
            </Container>
        </Content>
    )

}

export { Window };