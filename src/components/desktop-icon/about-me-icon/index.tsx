import { DesktopIcon } from "..";
import icon from '../../../assets/icons/desktop/text_file.png'
import { usePages } from "../../../hooks/usePages";


function AboutMeIcon() {
    const { aboutMe, setAboutMe } = usePages();

    const handleClick = () => {
        setAboutMe({ ...aboutMe, isMinimized: false, isInFocus: true, isClosed: false });
    }

    return (
        <DesktopIcon icon={icon} description='Sobre mim' onClick={(handleClick)} />
    )

}

export { AboutMeIcon };

