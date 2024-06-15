import { useDraggable } from "../../hooks/useDraggable";
import { WindowProps } from "../../types/WindowTypes";
import { Container, Content, Header } from "./styles";


function Window({ maximized, minimized, header, children, width }: WindowProps) {

    const { position, onMouseDown } = useDraggable(maximized);

    return (
        <Container>
            <Content maximized={maximized} minimized={minimized} width={width}
                style={(position && !maximized) ? {
                    'position': 'fixed',
                    'top': `${position.y}px`,
                    'left': `${position.x}px`,
                    'transform': 'none',
                } : {}}>
                <Header
                    onMouseDown={onMouseDown}>
                    {header}
                </Header>
                {children}
            </Content>
        </Container>
    )

}

export { Window };