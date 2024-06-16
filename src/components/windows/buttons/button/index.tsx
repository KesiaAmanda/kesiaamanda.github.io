import { Container } from "./styles";


function WindowButton(props: any) {

    return (
        <Container onClick={() => props.onClick()
        }>
            {props.icon}
        </Container >
    )

}

export { WindowButton };