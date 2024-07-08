import { Window } from "../../components/windows/window";
import { Container, Content, Avatar, Text, Social, Icon } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useTheme } from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";

function Welcome() {
    const theme = useTheme()
    const size = useWindowSize()
    const { welcome, focus, removeFocus } = usePages();

    const ref = useOutsideClick(() => {
        removeFocus()
    });

    return (
        <div ref={ref}>
            <Window page={welcome} description="Bem-vindo" icon={theme.icons.desktop.welcome}>
                <Container onClick={() => focus(welcome)}>
                    <Content $maxWidth={(size.width - 30) + "px"} $maxHeight={(size.height - 62) + "px"} $page={welcome[0]}>
                        <Text>
                            <span style={{ fontSize: '25px' }}>Olá, eu sou a</span>
                            <span style={{ fontSize: '43px' }}>&gt;Kesia Amanda!</span>
                            <span style={{ fontSize: '15px' }}>Desenvolvedora de Software</span>
                            <Social>
                                <a href="https://www.linkedin.com/in/kesiaamanda/" rel="noreferrer" target="_blank">
                                    <Icon draggable="false" src={theme.icons.social.linkedin} />
                                </a>
                                <a href="https://github.com/KesiaAmanda" rel="noreferrer" target="_blank">
                                    <Icon draggable="false" src={theme.icons.social.github} />
                                </a>
                            </Social>
                        </Text>
                        <Avatar>
                            <img draggable="false" src={theme.icons.social.avatar} alt="Avatar" />
                        </Avatar>
                    </Content>
                </Container>
            </Window>
        </div>
    )

}

export { Welcome }; 