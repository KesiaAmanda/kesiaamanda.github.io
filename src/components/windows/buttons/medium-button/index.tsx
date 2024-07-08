import { MediumButtonProps } from "../../../../types/ButtonTypes";
import { Container } from "./styles";


function MediumButtom({ onClick, isDisabled, icon }: MediumButtonProps) {

    return (
        <Container onClick={() => onClick()} $isDisabled={!!isDisabled}>
            {icon}
        </Container >
    )

}

export { MediumButtom };