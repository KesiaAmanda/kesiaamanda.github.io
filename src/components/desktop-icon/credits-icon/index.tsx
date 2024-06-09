import { DesktopIcon } from "..";
import icon from '../../../assets/icons/desktop/text_file_2.png'


function CreditsIcon() {

    const handleClick = () => {
        // onClick();
    }

    return (
        <DesktopIcon icon={icon} description='Créditos' onClick={(handleClick)} />
    )

}

export { CreditsIcon };

