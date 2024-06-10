import { Window } from "../../components/window";
import { CloseButton } from "../../components/window-button/close-button";
import { MaximizeButton } from "../../components/window-button/maximize-button";
import { MiminizeButton } from "../../components/window-button/minimize-button";
import { Buttons, Container, Content, Header, Avatar, Text, Social, Icon } from "./styles";
import avatar from '../../assets/images/download20230701162715-1.png'
import linkedin from '../../assets/icons/social/linkedin_pixel_logo_icon_181925.png'
import github from '../../assets/icons/social/github.png'


function Welcome() {

    return (
        <Window header={
            <>
                <Header>Bem-vindo!</Header>
                <Buttons>
                    <MiminizeButton />
                    <MaximizeButton />
                    <CloseButton />
                </Buttons>
            </>
        }
            body={
                <Container>
                    <Content>
                        <Text>
                            <span style={{ fontSize: '25px' }}>Olá, eu sou a</span>
                            <span style={{ fontSize: '43px' }}>&gt;Kesia Amanda!</span>
                            <span style={{ fontSize: '15px' }}>Desenvolvedora de Software</span>
                            <Social>
                                <a href="https://www.linkedin.com/in/kesiaamanda/" target="_blank">
                                    <Icon draggable="false" src={linkedin} />
                                </a>
                                <a href="https://github.com/KesiaAmanda" target="_blank">
                                    <Icon draggable="false" src={github} />
                                </a>
                            </Social>
                        </Text>
                        <Avatar>
                            <img draggable="false" src={avatar} alt="Avatar" />
                        </Avatar>
                    </Content>
                </Container>
            }
        >

        </Window>
    )

}

export { Welcome }; 