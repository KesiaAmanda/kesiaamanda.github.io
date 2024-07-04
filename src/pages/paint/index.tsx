import { Window } from "../../components/windows/window";
import { Container, Content, PaintApp } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";

import { useTheme } from "styled-components";


function Paint() {
    const theme = useTheme();
    const { paint, focus, removeFocus } = usePages();

    const ref = useOutsideClick(() => {
        removeFocus()
    });

    return (
        <div ref={ref}>
            <Window page={paint} description="Paint" icon={theme.icon.paint}>
                <Container onClick={() => focus(paint)}>
                    <Content $maxWidth={(window.innerWidth - 30) + "px"} $maxHeight={(window.innerHeight - 62) + "px"} $page={paint[0]}>
                        <PaintApp $maxWidth={(window.innerWidth - 5) + "px"} $maxHeight={(window.innerHeight - 62) + "px"} $page={paint[0]}></PaintApp>
                    </Content>
                </Container>
            </Window>
        </div>
    )

}

export { Paint };   