import { Window } from "../../components/window";
import { Container, Content, Title, Hr, P, WindowMenu } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";


function AboutMe() {
    const [cat, setCat] = useState("")
    const theme = useTheme()

    const { aboutMe, focus, removeFocus } = usePages();

    var text = " _______         __                   _______  __           \n|     __|.-----.|  |--..----..-----. |   |   ||__|.--------.\n|__     ||  _  ||  _  ||   _||  -__| |       ||  ||        |\n|_______||_____||_____||__|  |_____| |__|_|__||__||__|__|__|\n"

    const ref = useOutsideClick(() => {
        removeFocus()
    });

    useEffect(() => {
        var sprite1 = " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣷⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n    ⠀⠀⠀⠀⠀⠀⠀⣀⣶⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣦⣀⡀⠀⢀⣴⣇⠀⠀⠀⠀\n    ⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀\n    ⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀\n    ⠀⠀⠀⣴⣿⣿⣿⣿⠛⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀\n    ⠀⠀⣾⣿⣿⣿⣿⣿⣶⣿⣯⣭⣬⣉⣽⣿⣿⣄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀\n    ⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄\n    ⢸⣿⣿⣿⣿⠟⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⣿⣿⣿⣿⡿⠛⠉⠉⠉⠉⠁\n    ⠘⠛⠛⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠛⠛⠃⠀⠀⠀⠀⠀⠀⠀";
        var sprite2 = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣶⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣄⣀⡀⣠⣾⡇⠀⠀⠀⠀\n⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀\n⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⡇⠀⠀⠀⠀\n⠀⣶⣿⣦⣜⣿⣿⣿⡟⠻⣿⣿⣿⣿⣿⣿⣿⡿⢿⡏⣴⣺⣦⣙⣿⣷⣄⠀⠀⠀\n⠀⣯⡇⣻⣿⣿⣿⣿⣷⣾⣿⣬⣥⣭⣽⣿⣿⣧⣼⡇⣯⣇⣹⣿⣿⣿⣿⣧⠀⠀\n⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠸⣿⣿⣿⣿⣿⣿⣿⣷⠀\n⠀\n⠀\n";

        setInterval(() => {
            const today = new Date()
            const s = today.getSeconds()

            setCat(s % 2 === 0 ? sprite1 : sprite2)
        }, 1000)

    }, [])

    return (
        <div ref={ref}>
            <Window page={aboutMe} width={'600px'} description="Sobre mim.txt" icon={theme.icon.aboutMe}>
                <WindowMenu>
                    <span>File</span>
                    <span>Edit</span>
                    <span>Search</span>
                    <span>Help</span>
                </WindowMenu>
                <Container page={aboutMe[0]} onClick={() => { focus(aboutMe) }}>
                    <Content maxWidth={(window.innerWidth - 30) + "px"} maxHeight={(window.innerHeight - 100) + "px"} page={aboutMe[0]} >
                        <Hr />
                        <Title>{text}</Title>
                        <Hr />
                        <P>Oi! Me chamo Kesia e sou formada em Análise e Desenvolvimento de Sistemas. Sou
                            apaixonada pelo mundo da programação e atualmente atuo como desenvolvedora
                            backend. <br />
                            Minha experiência profissional gira em torno de linguagens como Java, Python e
                            frameworks como Spring. Com conhecimento em SQL e React, estou sempre buscando
                            expandir meu conhecimento e me manter atualizada com as últimas tendências do
                            mercado.<br />
                            Além do meu trabalho, tenho alguns hobbies que me ajudam a relaxar e me divertir.
                            Adoro jogar videogame e me aventurar em diferentes universos virtuais. Também
                            gosto
                            de desenvolver pequenos projetos pessoais, onde posso explorar minha
                            criatividade e
                            aprender coisas novas.<br />
                            Outra paixão minha é a história. Acredito que entender o passado nos ajuda a
                            compreender melhor o presente e a moldar o futuro.
                        </P>
                        <Title>{cat}</Title>
                        <Hr />
                    </Content>
                </Container>
            </Window>
        </div>
    )

}

export { AboutMe }; 