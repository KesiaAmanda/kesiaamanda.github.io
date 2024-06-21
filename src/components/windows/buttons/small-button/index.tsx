import { Container } from "./styles";


function SmallButtom(props: any) {

    return (
        <Container onClick={() => props.onClick()
        }>
            {props.icon}
        </Container >
    )

}

export { SmallButtom };