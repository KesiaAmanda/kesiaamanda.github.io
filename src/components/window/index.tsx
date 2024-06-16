import { useDraggable } from "../../hooks/useDraggable";
import { WindowProps } from "../../types/WindowTypes";
import { Container, Content, Header } from "./styles";


function Window({ header, children, width, page, focus }: WindowProps) {

    const { position, onMouseDown } = useDraggable(page.isMaximized, focus);

    return (
        <Container onClick={focus} page={page}>
            <Content width={width} page={page}
                style={(position && !page.isMaximized) ? {
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