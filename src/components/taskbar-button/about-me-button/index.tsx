import { TaskbarButton } from "..";
import { Content } from "./styles";
import { usePages } from "../../../hooks/usePages";


function AboutMeButton() {
    const { aboutMe, setAboutMe } = usePages();

    const handleClick = () => {
        if (aboutMe.isInFocus) {
            setAboutMe({ ...aboutMe, isMinimized: true, isInFocus: false });
        } else {
            setAboutMe({ ...aboutMe, isMinimized: false, isInFocus: true });
        }
    };

    return (
        <Content closed={aboutMe.isClosed}>
            <TaskbarButton isSelected={aboutMe.isInFocus} description="Sobre mim" onClick={handleClick} />
        </Content>
    )

}

export { AboutMeButton };