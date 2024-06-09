import { useState } from "react";
import { TaskbarButton } from "..";
import { Content } from "./styles";


function StartButton() {
    const [isSelected, setIsSelected] = useState<boolean>(false);

    return (
        <Content>
            <TaskbarButton isSelected={isSelected} description="Iniciar" onClick={() => { setIsSelected(!isSelected) }} />
        </Content>
    )

}

export { StartButton };

