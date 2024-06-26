import { Window } from "../../components/windows/window";
import { Container, Content, Title, Hr, Text, Divider } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useTheme } from "styled-components";
import { WindowMenu } from "../../components/windows/menu";
import { WindowAddress } from "../../components/windows/address";


function Skills() {
    const theme = useTheme()

    const { skills, focus, removeFocus } = usePages();

    const ref = useOutsideClick(() => {
        removeFocus()
    });

    return (
        <div ref={ref}>
            <Window page={skills} description="Linguagens e Ferramentas" icon={theme.icon.skills}>
                <WindowMenu />
                <Divider />
                <WindowAddress path="C:\Desktop\Linguagens e Ferramentas\Backend" />
                <Divider />
                <Container onClick={() => { focus(skills) }}>
                    <Content $maxWidth={(window.innerWidth - 30) + "px"} $maxHeight={(window.innerHeight - 100) + "px"} $page={skills[0]} >

                    </Content>
                </Container>
            </Window>
        </div>
    )

}

export { Skills }; 