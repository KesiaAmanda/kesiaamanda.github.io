import { Window } from "../../components/windows/window";
import { Container, Content, Title, Hr, Text, H1, P, A } from "./styles";
import { usePages } from "../../hooks/usePages";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useTheme } from "styled-components";
import { WindowMenu } from "../../components/windows/menu";


function Credits() {
    const theme = useTheme()

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
            <Window page={credits} description="Créditos" icon={theme.icon.credits}>
                <WindowMenu />
                <Container onClick={() => { focus(credits) }}>
                    <Content $maxWidth={(window.innerWidth - 30) + "px"} $maxHeight={(window.innerHeight - 100) + "px"} $page={credits[0]} >
                        <Title>{text}</Title>
                        <Hr />
                        <Text>
                            <H1>-ˋ Icones ˊ-</H1>
                            <P>Mídias sociais <A rel="noreferrer" href="https://www.iconfinder.com/Eisenhower" target="_blank">Iconfinder</A> .</P>
                            <P>Desktop <A rel="noreferrer" href="https://aconfuseddragon.itch.io/windows-95-plus-1" target="_blank">AConfusedDragon</A> by <A
                                rel="noreferrer" href="https://twitter.com/aconfuseddragon" target="_blank">@aconfuseddragon</A> .</P>
                            <P>Emoji <A rel="noreferrer" href="https://www.flaticon.com/free-icons/pixelated" target="_blank">Flaticon</A> .</P>
                            <P>Botões do rádio <A rel="noreferrer" href="https://iconmonstr.com/" target="_blank">iconmonstr</A> .</P>
                            <H1>-ˋ Imagens ˊ-</H1>
                            <P>Papel de parede <A rel="noreferrer" href="https://kimenanami.artstation.com/" target="_blank">Kime Nanami</A> by <A
                                rel="noreferrer" href="https://twitter.com/kimenanami" target="_blank">@kimenanami</A> .</P>
                            <P>Rádio <A rel="noreferrer" href="https://galactic-castle.tumblr.com/" target="_blank">Galactic Castle</A> by <A
                                rel="noreferrer" href="https://twitter.com/galactic_castle" target="_blank">@galactic_castle</A> .</P>
                            <P>Rádio <A rel="noreferrer" href="https://www.pixilart.com/art/undertale-annoying-dog-cb942dc43ab2ecf" target="_blank">Pixilart</A>
                                .</P>
                            <P>Logos <A rel="noreferrer" href="https://www.deviantart.com/panfrieddupa/gallery/83848313/pixel-logos"
                                target="_blank">panfrieddupa</A> by <A rel="noreferrer" href="https://twitter.com/panfrieddupa"
                                    target="_blank">@panfrieddupa</A> .</P>
                        </Text>
                        <Hr />
                    </Content>
                </Container>
            </Window>
        </div>
    )

}

export { Credits }; 