import { WindowProps } from "../../types/WindowTypes";
import { Container, Content, Header } from "./styles";


function Window({ maximized, minimized, header, children }: WindowProps) {

    return (
        <Container>
            <Content maximized={maximized} minimized={minimized}>
                <Header>
                    {header}
                </Header>
                {children}
            </Content>
        </Container>
    )

}

export { Window };