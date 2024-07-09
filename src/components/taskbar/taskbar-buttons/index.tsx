import { useTheme } from "styled-components";
import { usePages } from "../../../hooks/usePages";
import { Content } from "./styles";
import { TaskbarButton } from "../taskbar-button";
import { LoadingProps } from "../../../types/ButtonTypes";


function TaskbarButtons({ $loading }: LoadingProps) {

    const { welcome, aboutMe, training, skills, musicPlayer, credits, paint, minecraft, prairieKing } = usePages();
    const theme = useTheme();

    return (
        <Content $loading={$loading}>
            <TaskbarButton page={welcome} description="Bem-vindo" icon={theme.icons.desktop.welcome} />
            <TaskbarButton page={aboutMe} description="Sobre mim" icon={theme.icons.desktop.aboutMe} />
            <TaskbarButton page={training} description="C:\WINDOWS\system32\cmd.exe" icon={theme.icons.desktop.training} />
            <TaskbarButton page={skills} description="Linguagens e Ferramentas" icon={theme.icons.desktop.skills} />
            <TaskbarButton page={musicPlayer} description="Windows Media Player" icon={theme.icons.desktop.musicPlayer} />
            <TaskbarButton page={credits} description="Créditos" icon={theme.icons.desktop.credits} />
            <TaskbarButton page={paint} description="Paint" icon={theme.icons.desktop.paint} />
            <TaskbarButton page={minecraft} description="Minecraft" icon={theme.icons.desktop.minecraft} />
            <TaskbarButton page={prairieKing} description="Journey of the Prairie King" icon={theme.icons.desktop.prairieKing} />
        </Content>
    )

}

export { TaskbarButtons };

