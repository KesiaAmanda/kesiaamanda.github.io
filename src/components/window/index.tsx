import { WindowProps } from "../../types/WindowTypes";
import { Container, Content, Header } from "./styles";


function Window({ maximized, header, children }: WindowProps) {

    return (
        <Container>
            <Content maximized={maximized}>
                <Header>
                    {header}
                </Header>
                {children}
            </Content>
        </Container>
    )

}

export { Window };