import { Window } from "../../components/windows/window";
import { Container, Content } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useEffect } from "react";
import { useTheme } from "styled-components";


function Training() {
    const theme = useTheme()

    const { training, focus, removeFocus } = usePages();

    const ref = useOutsideClick(() => {
        removeFocus()
    });

    useEffect(() => {
        setInterval(() => {

        }, 1000)

    }, [])

    return (
        <div ref={ref}>
            <Window page={training} width={'600px'} description="Formação.txt" icon={theme.icon.training}>
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