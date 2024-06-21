import { isDisabled } from "@testing-library/user-event/dist/utils";
import { Container } from "./styles";


function MediumButtom(props: any) {

    return (
        <Container onClick={() => props.onClick()} isDisabled={!!props.isDisabled}
        >
            {props.icon}
        </Container >
    )

}

export { MediumButtom };