import { useTheme } from "styled-components";
import { usePages } from "../../../hooks/usePages";
import { Shortcut } from "../shortcut";


function Shortcuts() {
    const { welcome, aboutMe, training, skills, musicPlayer, credits, paint, minecraft, prairieKing } = usePages();
    const theme = useTheme();

    return (
        <>
            <Shortcut page={welcome} description="Bem-vindo" icon={theme.icons.desktop.welcome} />
            <Shortcut page={aboutMe} description="Sobre mim" icon={theme.icons.desktop.aboutMe} />
            <Shortcut page={training} description="Formação.bat" icon={theme.icons.desktop.training} />
            <Shortcut page={skills} description="Linguagens e Ferramentas" icon={theme.icons.desktop.skills} />
            <Shortcut page={musicPlayer} description="Windows Media Player" icon={theme.icons.desktop.musicPlayer} />
            <Shortcut page={credits} description="Créditos" icon={theme.icons.desktop.credits} />
            <Shortcut page={paint} description="Paint" icon={theme.icons.desktop.paint} />
            <Shortcut page={minecraft} description="Minecraft" icon={theme.icons.desktop.minecraft} />
            <Shortcut page={prairieKing} description="Journey of the Prairie King" icon={theme.icons.desktop.prairieKing} />
        </>
    )

}

export { Shortcuts };   