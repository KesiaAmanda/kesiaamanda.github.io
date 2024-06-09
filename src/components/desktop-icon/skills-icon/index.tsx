import { DesktopIcon } from "..";
import icon from '../../../assets/icons/desktop/folder_open.png'


function SkillsIcon() {

    const handleClick = () => {
        // onClick();
    }

    return (
        <DesktopIcon icon={icon} description='Linguagens e Ferramentas' onClick={(handleClick)} />
    )

}

export { SkillsIcon };

