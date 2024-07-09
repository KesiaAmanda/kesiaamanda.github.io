import { Window } from "../../components/windows/window";
import { Container, Content, Title, Hr, Text, H1, A } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useTheme } from "styled-components";
import { WindowMenu } from "../../components/windows/menu";
import { useWindowSize } from "../../hooks/useWindowSize";


function Credits() {
    const theme = useTheme()
    const size = useWindowSize()

    const { credits, focus, removeFocus } = usePages();

    var text = " ________  ________  _______   ________  ___  _________  ________  ________\n" +
        "|\\   ____\\|\\   __  \\|\\  ___ \\ |\\   ___ \\|\\  \\|\\___   ___\\\\   __  \\|\\   ____\\\n" +
        " \\ \\  \\___|\\ \\  \\|\\  \\ \\   __/|\\ \\  \\_|\\ \\ \\  \\|___ \\  \\_\\ \\  \\|\\  \\ \\  \\___|_\n" +
        "   \\ \\  \\    \\ \\   _  _\\ \\  \\_|/_\\ \\  \\ \\\\ \\ \\  \\   \\ \\  \\ \\ \\  \\\\\\  \\ \\_____  \\\n" +
        "     \\ \\  \\____\\ \\  \\\\  \\\\ \\  \\_|\\ \\ \\  \\_\\\\ \\ \\  \\   \\ \\  \\ \\ \\  \\\\\\  \\|____|\\  \\\n" +
        "       \\ \\_______\\ \\__\\\\ _\\\\ \\_______\\ \\_______\\ \\__\\   \\ \\__\\ \\ \\_______\\____\\_\\  \\\n" +
        "         \\|_______|\\|__|\\|__|\\|_______|\\|_______|\\|__|    \\|__|  \\|_______|\\_________\\\n" +
        "                                                                           \\|_________|"

    const ref = useOutsideClick(() => {
        removeFocus()
    });

    return (
        <div ref={ref}>
            <Window page={credits} description="Créditos - Notepad" icon={theme.icons.desktop.credits}>
                <WindowMenu page={credits[0]} />
                <Container onClick={() => { focus(credits) }}>
                    <Content $maxWidth={(size.width - 47) + "px"} $maxHeight={(size.height - 119) + "px"} $page={credits[0]} >
                        <Title>{text}</Title>
                        <Hr />
                        <Text>
                            <H1>-ˋ Icones ˊ-</H1>
                            <li>Mídias sociais <A rel="noreferrer" href="https://www.iconfinder.com/Eisenhower" target="_blank">Iconfinder</A> .</li>

                            <li>Atalhos dos programas <A rel="noreferrer" href="https://twitter.com/aconfuseddragon" target="_blank">@aconfuseddragon</A>,
                                <A rel="noreferrer" href="https://aconfuseddragon.itch.io/windows-95-plus-1" target="_blank">windows-95-plus-1</A> <A rel="noreferrer"
                                    href="https://aconfuseddragon.itch.io/windows-95-plus-2" target="_blank">windows-95-plus-2</A>.</li>

                            <li>Ícone da página <A rel="noreferrer" href="https://www.flaticon.com/free-icons/pixelated" target="_blank">Flaticon</A> .</li>

                            <li>Botões do Windows Media Player <A rel="noreferrer" href="https://iconmonstr.com/" target="_blank">iconmonstr</A> .</li>

                            <H1>-ˋ Imagens ˊ-</H1>
                            <li>Papel de parede <A rel="noreferrer" href="https://kimenanami.artstation.com/" target="_blank">Kime Nanami</A> por <A
                                rel="noreferrer" href="https://twitter.com/kimenanami" target="_blank">@kimenanami</A> .</li>

                            <li>Imagem do Windows Media Player <A rel="noreferrer" href="https://galactic-castle.tumblr.com/" target="_blank">Galactic Castle</A> por <A
                                rel="noreferrer" href="https://twitter.com/galactic_castle" target="_blank">@galactic_castle</A> .</li>

                            <li>Imagem do Windows Media Player <A rel="noreferrer" href="https://www.reddit.com/r/PixelArt/comments/1ci6rxh/pedro_racoon/" target="_blank">Hobbes2594</A>
                                .</li>

                            <li>Logos das linguagens e ferramentas <A rel="noreferrer" href="https://www.deviantart.com/panfrieddupa/gallery/83848313/pixel-logos"
                                target="_blank">panfrieddupa</A> por <A rel="noreferrer" href="https://twitter.com/panfrieddupa"
                                    target="_blank">@panfrieddupa</A> .</li>

                            <H1>-ˋ Fonte ˊ-</H1>
                            <li><A rel="noreferrer" href="http://www.onlinewebfonts.com/fonts" target="_blank">Web Fonts</A>.</li>

                            <H1>-ˋ Outras páginas ˊ-</H1>
                            <li><A rel="noreferrer" href="https://github.com/1j01/jspaint" target="_blank">JS Paint</A>.</li>
                            <li><A rel="noreferrer" href="https://github.com/LabyStudio/js-minecraft" target="_blank">JS Minecraft</A>.</li>
                            <li><A rel="noreferrer" href="https://jsprairieking.neocities.org/about" target="_blank">JS Prairie King</A>.</li>
                        </Text>
                        <Hr />
                    </Content>
                </Container>
            </Window>
        </div>
    )

}

export { Credits }; 