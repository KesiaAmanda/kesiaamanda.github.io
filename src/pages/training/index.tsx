import { Window } from "../../components/window";
import { CloseButton } from "../../components/window-button/close-button";
import { MaximizeButton } from "../../components/window-button/maximize-button";
import { MiminizeButton } from "../../components/window-button/minimize-button";
import { Buttons, Container, Content, Header } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Fragment } from "react/jsx-runtime";
import { useEffect } from "react";


function Training() {

    const { training, maximize, minimize, close, focus, removeFocus } = usePages();

    const ref = useOutsideClick(() => {
        removeFocus()
    });

    useEffect(() => {
        setInterval(() => {

        }, 1000)

    }, [])

    return (
        <div ref={ref}>
            <Window page={training[0]} width={'600px'} focus={() => focus(training)}
                header={
                    <Fragment>
                        <Header>Formação.txt</Header>
                        <Buttons>
                            <MiminizeButton onClick={() => { minimize(training) }} />
                            <MaximizeButton onClick={() => { maximize(training) }} />
                            <CloseButton onClick={() => { close(training) }} />
                        </Buttons>
                    </Fragment>
                }
            >
                <Container page={training[0]} onClick={() => { focus(training) }}>
                    <Content maxWidth={(window.innerWidth - 30) + "px"}
                        maxHeight={(window.innerHeight - 100) + "px"}
                        page={training[0]} >

                    </Content>
                </Container>
            </Window>
        </div>
    )

}

export { Training }; 