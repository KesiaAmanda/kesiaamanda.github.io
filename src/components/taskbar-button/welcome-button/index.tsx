import { TaskbarButton } from "..";
import { Content } from "./styles";
import { usePages } from "../../../hooks/usePages";


function WelcomeButton() {
    const { welcome, setWelcome } = usePages();

    const handleClick = () => {
        if (welcome.isInFocus) {
            setWelcome({ ...welcome, isMinimized: true, isInFocus: false });
        } else {
            setWelcome({ ...welcome, isMinimized: false, isInFocus: true });
        }
    };

    return (
        <Content closed={welcome.isClosed}>
            <TaskbarButton isSelected={welcome.isInFocus} description="Bem-vindo" onClick={handleClick} />
        </Content>
    )

}

export { WelcomeButton };