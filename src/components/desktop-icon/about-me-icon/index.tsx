import { DesktopIcon } from "..";
import icon from '../../../assets/icons/desktop/text_file.png'


function AboutMeIcon() {

    const handleClick = () => {
        // onClick();
    }

    return (
        <DesktopIcon icon={icon} description='Sobre mim' onClick={(handleClick)} />
    )

}

export { AboutMeIcon };

