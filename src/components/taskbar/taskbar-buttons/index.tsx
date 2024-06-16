import { useTheme } from "styled-components";
import { usePages } from "../../../hooks/usePages";
import { Content } from "./styles";
import { TaskbarButton } from "../taskbar-button";


function TaskbarButtons() {

    const { welcome, aboutMe, training } = usePages();
    const theme = useTheme();

    return (
        <Content>
            <TaskbarButton page={welcome} description="Formação" icon={theme.icon.welcome} />
            <TaskbarButton page={aboutMe} description="Sobre mim" icon={theme.icon.aboutMe} />
            <TaskbarButton page={training} description="Formação" icon={theme.icon.training} />
            {/* <TaskbarButton isSelected={false} description="Linguagens e Ferramentas" onClick={() => { }} />
              <TaskbarButton isSelected={false} description="Rádio" onClick={() => { }} />
              <TaskbarButton isSelected={false} description="Créditos" onClick={() => { }} /> */}
        </Content>
    )

}

export { TaskbarButtons };

