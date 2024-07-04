import { useTheme } from "styled-components";
import { usePages } from "../../../hooks/usePages";
import { Shortcut } from "../shortcut";


function Shortcuts() {
    const { welcome, aboutMe, training, skills, musicPlayer, credits, paint } = usePages();
    const theme = useTheme();

    return (
        <>
            <Shortcut page={welcome} description="Bem-vindo" icon={theme.icon.welcome} />
            <Shortcut page={aboutMe} description="Sobre mim" icon={theme.icon.aboutMe} />
            <Shortcut page={training} description="Formação" icon={theme.icon.training} />
            <Shortcut page={skills} description="Linguagens e Ferramentas" icon={theme.icon.skills} />
            <Shortcut page={musicPlayer} description="Rádio" icon={theme.icon.musicPlayer} />
            <Shortcut page={credits} description="Créditos" icon={theme.icon.credits} />
            <Shortcut page={paint} description="Paint" icon={theme.icon.paint} />
        </>
    )

}

export { Shortcuts };