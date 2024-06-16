import { Window } from "../../components/window";
import { CloseButton } from "../../components/window-button/close-button";
import { MaximizeButton } from "../../components/window-button/maximize-button";
import { MiminizeButton } from "../../components/window-button/minimize-button";
import { Buttons, Container, Content, Header, Avatar, Text, Social, Icon } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Fragment } from "react/jsx-runtime";
import avatar from '../../assets/images/download20230701162715-1.png'
import linkedin from '../../assets/icons/social/linkedin_pixel_logo_icon_181925.png'
import github from '../../assets/icons/social/github.png'


function Welcome() {
    const { welcome, maximize, minimize, close, focus, removeFocus } = usePages();

    const ref = useOutsideClick(() => {
        removeFocus(welcome)
    });

    return (
        <div ref={ref}>
            <Window page={welcome[0]} width={'950px'} focus={() => focus(welcome)}
                header={
                    <Fragment>
                        <Header>Bem-vindo!</Header>
                        <Buttons>
                            <MiminizeButton onClick={() => minimize(welcome)} />
                            <MaximizeButton onClick={() => maximize(welcome)} />
                            <CloseButton onClick={() => close(welcome)} />
                        </Buttons>
                    </Fragment>
                }
            >
                <Container page={welcome[0]} onClick={() => focus(welcome)}>
                    <Content page={welcome[0]}>
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