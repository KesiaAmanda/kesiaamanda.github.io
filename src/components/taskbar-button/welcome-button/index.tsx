import { TaskbarButton } from "..";
import { Content } from "./styles";
import { usePages } from "../../../hooks/usePages";


function WelcomeButton() {
    const { welcome, minimize, open } = usePages();

    const handleClick = () => {
        if (welcome[0].isInFocus) {
            minimize(welcome);
        } else {
            open(welcome);
        }
    };

    return (
        <Content closed={welcome[0].isClosed}>
            <TaskbarButton isSelected={welcome[0].isInFocus} description="Bem-vindo" onClick={handleClick} />
        </Content>
    )

}

export { WelcomeButton };