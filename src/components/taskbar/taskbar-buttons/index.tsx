import { useTheme } from "styled-components";
import { usePages } from "../../../hooks/usePages";
import { Content } from "./styles";
import { TaskbarButton } from "../taskbar-button";


function TaskbarButtons() {

    const { welcome, aboutMe, training, skills, musicPlayer, credits, paint, minecraft, prairieKing } = usePages();
    const theme = useTheme();

    return (
        <Content>
            <TaskbarButton page={welcome} description="Bem-vindo" icon={theme.icons.welcome} />
            <TaskbarButton page={aboutMe} description="Sobre mim" icon={theme.icons.aboutMe} />
            <TaskbarButton page={training} description="C:\WINDOWS\system32\cmd.exe" icon={theme.icons.training} />
            <TaskbarButton page={skills} description="Linguagens e Ferramentas" icon={theme.icons.skills} />
            <TaskbarButton page={musicPlayer} description="Windows Media Player" icon={theme.icons.musicPlayer} />
            <TaskbarButton page={credits} description="Créditos" icon={theme.icons.credits} />
            <TaskbarButton page={paint} description="Paint" icon={theme.icons.paint} />
            <TaskbarButton page={minecraft} description="Minecraft" icon={theme.icons.minecraft} />
            <TaskbarButton page={prairieKing} description="Journey of the Prairie King" icon={theme.icons.prairieKing} />
        </Content>
    )

}

export { TaskbarButtons };

