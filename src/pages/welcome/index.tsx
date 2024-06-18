import { Window } from "../../components/windows/window";
import { Container, Content, Avatar, Text, Social, Icon } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import avatar from '../../assets/images/download20230701162715-1.png'
import linkedin from '../../assets/icons/social/linkedin_pixel_logo_icon_181925.png'
import github from '../../assets/icons/social/github.png'
import { useTheme } from "styled-components";


function Welcome() {
    const theme = useTheme()
    const { welcome, focus, removeFocus } = usePages();

    const ref = useOutsideClick(() => {
        removeFocus()
    });

    return (
        <div ref={ref}>
            <Window page={welcome} description="Bem-vindo.exe" icon={theme.icon.welcome}>
                <Container page={welcome[0]} onClick={() => focus(welcome)}>
                    <Content maxWidth={(window.innerWidth - 30) + "px"} maxHeight={(window.innerHeight - 62) + "px"} page={welcome[0]}>
                        <Text>
                            <span style={{ fontSize: '25px' }}>Olá, eu sou a</span>
                            <span style={{ fontSize: '43px' }}>&gt;Kesia Amanda!</span>
                            <span style={{ fontSize: '15px' }}>Desenvolvedora de Software</span>
                            <Social>
                                <a href="https://www.linkedin.com/in/kesiaamanda/" rel="noreferrer" target="_blank">
                                    <Icon draggable="false" src={linkedin} />
                                </a>
                                <a href="https://github.com/KesiaAmanda" rel="noreferrer" target="_blank">
                                    <Icon draggable="false" src={github} />
                                </a>
                            </Social>
                        </Text>
                        <Avatar>
                            <img draggable="false" src={avatar} alt="Avatar" />
                        </Avatar>
                    </Content>
                </Container>
            </Window>
        </div>
    )

}

export { Welcome }; 