import { useTheme } from "styled-components";
import { usePages } from "../../../hooks/usePages";
import { DesktopIcon } from "../desktop-icon";


function DesktopIcons() {
    const { welcome, aboutMe, training, skills, musicPlayer, credits } = usePages();
    const theme = useTheme();

    return (
        <>
            <DesktopIcon page={welcome} description="Bem-vindo" icon={theme.icon.welcome} />
            <DesktopIcon page={aboutMe} description="Sobre mim" icon={theme.icon.aboutMe} />
            <DesktopIcon page={training} description="Formação" icon={theme.icon.training} />
            <DesktopIcon page={skills} description="Linguagens e Ferramentas" icon={theme.icon.skills} />
            <DesktopIcon page={musicPlayer} description="Rádio" icon={theme.icon.musicPlayer} />
            <DesktopIcon page={credits} description="Créditos" icon={theme.icon.credits} />
        </>
    )

}

export { DesktopIcons };