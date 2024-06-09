import { Container, Content, Header } from "./styles";


function Window(props: any) {

    return (
        <Container>
            <Content>
                <Header>
                    {props.header}
                </Header>
                {props.body}
            </Content>
        </Container>
    )

}

export { Window };