import { DesktopIcon } from "..";
import icon from '../../../assets/icons/desktop/text_file.png'
import { usePages } from "../../../hooks/usePages";


function AboutMeIcon() {
    const { aboutMe, open } = usePages();

    const handleClick = () => {
        open(aboutMe)
    }

    return (
        <DesktopIcon icon={icon} description='Sobre mim' onClick={(handleClick)} />
    )

}

export { AboutMeIcon };

