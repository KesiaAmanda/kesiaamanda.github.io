import { SmallButtonProps } from "../../../../types/ButtonTypes";
import { Container } from "./styles";


function SmallButtom({ onClick, icon }: SmallButtonProps) {

    return (
        <Container onClick={() => onClick()
        }>
            {icon}
        </Container >
    )

}

export { SmallButtom };