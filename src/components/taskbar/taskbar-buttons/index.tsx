import { useTheme } from "styled-components";
import { usePages } from "../../../hooks/usePages";
import { Content } from "./styles";
import { TaskbarButton } from "../taskbar-button";


function TaskbarButtons() {

    const { welcome, aboutMe, training, skills, musicPlayer, credits, paint } = usePages();
    const theme = useTheme();

    return (
        <Content>
            <TaskbarButton page={welcome} description="Bem-vindo" icon={theme.icon.welcome} />
            <TaskbarButton page={aboutMe} description="Sobre mim" icon={theme.icon.aboutMe} />
            <TaskbarButton page={training} description="Formação" icon={theme.icon.training} />
            <TaskbarButton page={skills} description="Linguagens e Ferramentas" icon={theme.icon.skills} />
            <TaskbarButton page={musicPlayer} description="Rádio" icon={theme.icon.musicPlayer} />
            <TaskbarButton page={credits} description="Créditos" icon={theme.icon.credits} />
            <TaskbarButton page={paint} description="Paint" icon={theme.icon.paint} />
        </Content>
    )

}

export { TaskbarButtons };

