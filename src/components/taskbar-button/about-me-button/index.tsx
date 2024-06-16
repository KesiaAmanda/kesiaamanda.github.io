import { TaskbarButton } from "..";
import { Content } from "./styles";
import { usePages } from "../../../hooks/usePages";


function AboutMeButton() {
    const { aboutMe, minimize, open } = usePages();

    const handleClick = () => {
        if (aboutMe[0].isInFocus) {
            minimize(aboutMe);
        } else {
            open(aboutMe);
        }
    };

    return (
        <Content closed={aboutMe[0].isClosed}>
            <TaskbarButton isSelected={aboutMe[0].isInFocus} description="Sobre mim" onClick={handleClick} />
        </Content>
    )

}

export { AboutMeButton };