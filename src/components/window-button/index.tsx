import { Container } from "./styles";


function WindowButton(props: any) {

    return (
        <Container onClick={() => console.log('oie')
        }>
            {props.icon}
        </Container >
    )

}

export { WindowButton };