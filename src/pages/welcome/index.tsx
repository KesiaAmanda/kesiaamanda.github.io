import { Window } from "../../components/window";
import { CloseButton } from "../../components/window-button/close-button";
import { MaximizeButton } from "../../components/window-button/maximize-button";
import { MiminizeButton } from "../../components/window-button/minimize-button";
import { Buttons, Container, Content, CustomHeaderTitle } from "./styles";


function Welcome() {

    return (
        <Window header={
            <>
                <CustomHeaderTitle>Bem-vindo!</CustomHeaderTitle>
                <Buttons>
                    <MiminizeButton />
                    <MaximizeButton />
                    <CloseButton />
                </Buttons>
            </>
        }
            body={
                <Container>
                    <Content></Content>
                </Container>
            }
        >

        </Window>
    )

}

export { Welcome }; 