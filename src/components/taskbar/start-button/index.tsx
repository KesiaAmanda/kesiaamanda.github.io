import { Button } from "../button";
import { Content } from "./styles";
import { StartMenu } from "../../../pages/start-menu";
import { Divider } from "../button/styles";
import { usePages } from "../../../hooks/usePages";
import { useOutsideClick } from "../../../hooks/useOutsideClick";


function StartButton() {
    const { startMenu, removeFocus, openMenu } = usePages();

    const ref = useOutsideClick(() => {
        removeFocus()
    });

    const handleClick = () => {
        if (startMenu) {
            removeFocus()
        } else {
            openMenu()
        }
    };

    return (
        <Content ref={ref}>
            <Button isSelected={startMenu} description="Iniciar" onClick={handleClick} />
            <StartMenu isSelected={startMenu} onClick={() => { removeFocus() }} />
            <Divider />
        </Content>
    )

}

export { StartButton };