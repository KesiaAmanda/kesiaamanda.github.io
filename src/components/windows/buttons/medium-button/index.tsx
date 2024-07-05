import { MediumButtomProps } from "../../../../types/ButtonTypes";
import { Container } from "./styles";


function MediumButtom({ onClick, isDisabled, icon }: MediumButtomProps) {

    return (
        <Container onClick={() => onClick()} $isDisabled={!!isDisabled}
        >
            {icon}
        </Container >
    )

}

export { MediumButtom };