import { DesktopIcon } from "..";
import icon from '../../../assets/icons/desktop/program.png'


function WelcomeIcon() {

    const handleClick = () => {
        // onClick();
    }

    return (
        <DesktopIcon icon={icon} description='Bem-vindo' onClick={(handleClick)} />
    )

}

export { WelcomeIcon };

