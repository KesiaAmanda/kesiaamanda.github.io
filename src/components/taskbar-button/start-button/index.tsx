import { TaskbarButton } from "..";
import { Content } from "./styles";
import { StartMenu } from "../../../pages/start-menu";
import { Divider } from "../styles";
import { usePages } from "../../../hooks/usePages";
import { useOutsideClick } from "../../../hooks/useOutsideClick";


function StartButton() {
    const { startFocus, setStartButtonFocus } = usePages();

    const ref = useOutsideClick(() => {
        if (startFocus)
            setStartButtonFocus(false)
    });

    return (
        <Content ref={ref}>
            <TaskbarButton isSelected={startFocus} description="Iniciar" onClick={() => { setStartButtonFocus(!startFocus) }} />
            <StartMenu isSelected={startFocus} setIsSelected={setStartButtonFocus} />
            <Divider />
        </Content>
    )

}

export { StartButton };