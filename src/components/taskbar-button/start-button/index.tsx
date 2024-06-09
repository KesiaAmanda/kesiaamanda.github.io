import { useState } from "react";
import { TaskbarButton } from "..";
import { Content } from "./styles";
import { StartMenu } from "../../../pages/start-menu";
import { Divider } from "../styles";


function StartButton() {
    const [isSelected, setIsSelected] = useState<boolean>(false);

    return (
        <Content>
            <TaskbarButton isSelected={isSelected} description="Iniciar" onClick={() => { setIsSelected(!isSelected) }} />
            <StartMenu isSelected={isSelected} />
            <Divider />
        </Content>
    )

}

export { StartButton };